"use client";

import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type PostacPageProps = {
    params: {
        postacIdx: number,
    },
};

export default function PostacPage({ params }: PostacPageProps) {
    const [jsonData, setJsonData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/postacie2.json', { cache: "force-cache" });
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
            <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto text-center my-10'>
                Strona postaci - ładowanie...
            </div>
        );
    }

    if (params.postacIdx < 0 || params.postacIdx >= jsonData.length) {
        return notFound();
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto my-10'>
            <h1 className='text-center text-3xl font-bold my-10'>{jsonData[params.postacIdx].tytul}</h1>

            <a className='block text-blue-500 mb-5' href='/polski/postacie'>&lt;&lt; Powrót</a>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Postać
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].tytul}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Informacje
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].dane}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Epoka
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].epoka}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Autor
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].autor}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Problematyka
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].problem}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Cechy charakteru
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].cechy}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Finał biografii
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].biografia}
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Rola postaci
                            </th>
                            <td className="px-6 py-4">
                                {jsonData[params.postacIdx].rola}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
