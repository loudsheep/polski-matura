"use client";

import React, { useEffect, useState } from 'react'

export default function PostaciePage() {
    const [jsonData, setJsonData] = useState<any>(null);
    const [epoki, setEpoki] = useState<string[]>([]);
    const [autorzy, setAutorzy] = useState<string[]>([]);

    const getAllEpoki = (data: any) => {
        let ep: string[] = [];
        for (const postac of data) {
            if (!ep.includes(postac.epoka)) {
                ep.push(postac.epoka);
            }
        }

        setEpoki(ep);
    };

    const getAllAutorzy = (data: any) => {
        let ep: string[] = [];
        for (const postac of data) {
            if (!ep.includes(postac.autor)) {
                ep.push(postac.autor);
            }
        }

        setAutorzy(ep);
    };

    const getRandomElement = (array: any) => {
        let idx = Math.floor(Math.random() * array.length);
        return array[idx];
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/postacie2.json', { cache: "force-cache" });
                const data = await response.json();

                setJsonData(data);
                getAllEpoki(data);
                getAllAutorzy(data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center'>
            <h1 className='text-center text-3xl font-bold my-10'>Najważniejsze postacie literackie</h1>

            {jsonData && (
                <ul className='list-disc'>
                    {jsonData.map((value: any, idx: any) => (
                        <li>
                            <a href={`/polski/postacie/${idx}`} className='text-blue-500'>{value.tytul}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
