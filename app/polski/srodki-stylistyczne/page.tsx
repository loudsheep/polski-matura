'use client';

import React, { useState, useEffect } from 'react';

export default function SrodkiPage() {
    const [jsonData, setJsonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/srodki.json');
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center'>
            <h1 className='text-center text-3xl font-bold my-10'>Środki literackie</h1>

            {jsonData && jsonData.map((value: any, idx: any) => (
                <div key={idx} className='mb-10 pb-5 border-b'>
                    <h2 className='text-xl font-bold'>{value.title}</h2>
                    <p>{value.content}</p>
                </div>
            ))}
        </div>
    )
}
