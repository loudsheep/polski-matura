'use client';

import Accordion from '@/components/Accordion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function OpracowaniaPage() {
    const [jsonData, setJsonData] = useState<any>(null);
    const [lekturaIdx, setLekturaIdx] = useState<number | null>(null);
    const [opracowanieIdx, setOpracowanieIdx] = useState<number | null>(null);

    const handleShowingOpracowanie = (lektura: number, opracowanie: number) => {
        setLekturaIdx(lektura);
        setOpracowanieIdx(opracowanie);
    };

    const handleBackFromOpracowanie = () => {
        setLekturaIdx(null);
        setOpracowanieIdx(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/opracowania/pytania_jawne.json');
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

    if (lekturaIdx != null && opracowanieIdx != null) {
        return (
            <div className='w-1/2 mx-auto flex-col items-center mb-20'>
                <h1 className='text-center text-3xl font-bold my-10'>Opracowanie pytania:</h1>
                <button className='text-blue-500 pb-5' onClick={handleBackFromOpracowanie}>&lt;&lt; Powrót</button>
                <h2 className='font-bold mb-10'>{jsonData[lekturaIdx].opracowania[opracowanieIdx].pytanie}</h2>

                <p className='text-justify'>{jsonData[lekturaIdx].opracowania[opracowanieIdx].opracowanie}</p>
            </div>
        );
    }

    return (
        <div className='w-1/2 mx-auto flex-col items-center mb-20'>
            <h1 className='text-center text-3xl font-bold my-10'>Omówienia jawnych pytań z matury ustnej</h1>
            <h2></h2>

            {jsonData.map((value: any, idx: any) => (
                <Accordion accordionText={value.tytul} key={idx} className={"p-5"}>
                    <ul className='list-disc'>
                        {value.opracowania.map((opr: any, idx2: any) => (
                            <li key={idx2}>
                                <Link href="" className="text-blue-500" onClick={() => handleShowingOpracowanie(idx, idx2)}>{opr.pytanie}</Link>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </div>
    );
}
