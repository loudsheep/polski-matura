'use client';

import { notFound } from 'next/navigation';
import React, { useState, useEffect } from 'react';

type OpracowanieProps = {
    params: {
        lekturaIdx: string,
        opracowanieIdx: string,
    },
};

export default function OpracowaniePage({ params }: OpracowanieProps) {
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
            </div>
        )
    }

    if (params.lekturaIdx >= jsonData.length || params.opracowanieIdx >= jsonData[params.lekturaIdx].opracowania.length) {
        return notFound();
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-20'>
            <h1 className='text-center text-3xl font-bold my-10'>Opracowanie pytania:</h1>
            <a className='text-blue-500 pb-5' href='/polski/opracowania'>&lt;&lt; Powrót</a>
            <h2 className='font-bold mb-10'>{jsonData[params.lekturaIdx].opracowania[params.opracowanieIdx].pytanie}</h2>

            <p className='text-justify'>{jsonData[params.lekturaIdx].opracowania[params.opracowanieIdx].opracowanie}</p>
        </div>
    );
}
