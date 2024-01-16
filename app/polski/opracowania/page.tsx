'use client';

import Accordion from '@/components/Accordion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function OpracowaniaPage() {
    const [jsonData, setJsonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/opracowania/pytania_jawne.json', { cache: "force-cache" });
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

    if (jsonData == null) {
        return (
            <div className='w-1/2 mx-auto flex-col items-center'>
                <h1 className='text-center text-3xl font-bold my-10'>Omówienia jawnych pytań z matury ustnej</h1>
            </div>
        )
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-20'>
            <h1 className='text-center text-3xl font-bold my-10'>Omówienia jawnych pytań z matury ustnej</h1>
            <h2 className='text-center text-lg my-10'>Jeżeli tytuł książki się powtarza niżej i pytania nie mają przed sobą numeru to znaczy, że są to pytania usunięte z wymagań ale opracowanie pozostało.</h2>

            {jsonData.map((value: any, idx: any) => (
                <Accordion accordionText={value.tytul} key={idx} className={"p-5"}>
                    <ul className='list-disc'>
                        {value.opracowania.map((opr: any, idx2: any) => (
                            <li key={idx2}>
                                <Link href={`/polski/opracowania/${idx}/${idx2}`} className="text-blue-500">{opr.pytanie}</Link>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </div>
    );
}
