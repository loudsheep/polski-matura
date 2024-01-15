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
                const response = await fetch('/data/postacie2.json');
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
        <div className='w-3/4 mx-auto'>
            {epoki.map((value, idx) => (
                <p>{value}</p>
            ))}
        </div>
    )
}
