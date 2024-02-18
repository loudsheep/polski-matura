'use client';

import React, { useState, useEffect } from 'react';

export default function EpokiWSkrociePage() {
    const [jsonData, setJsonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/epoki/epoki.json');
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
            <h1 className='text-center text-3xl font-bold my-10'>Epoki literackie w skrócie</h1>
            <div className='mb-10 pb-5 border-b'>
                <img src="/image/czasyEpok.png" alt="Linia czasu epok literackich" className="rounded-lg" />
                <p className='text-center text-gray-400 text-opacity-75'>Oś czasu trwania poszczególnych epok</p>
            </div>

            {jsonData && jsonData.map((value: any, idx: any) => (
                <div key={idx} className='mb-10 pb-5 border-b'>
                    <h2 className='text-xl font-bold'>{value.epoka}</h2>
                    <p>{value.opis}</p>
                </div>
            ))}

            <a href="/polski/epoki/w-skrocie/quiz">
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-lg px-8 py-4 me-2 mb-20 foc:outline-none">Zobacz quiz &gt;&gt;</button>
            </a>
        </div>
    )
}
