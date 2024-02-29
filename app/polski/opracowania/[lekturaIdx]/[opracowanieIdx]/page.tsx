'use client';

import NoteModal from '@/components/modals/NoteModal';
import useNotes from '@/hooks/useOpracowaniaNotes';
import { notFound } from 'next/navigation';
import React, { useState, useEffect } from 'react';

type OpracowanieProps = {
    params: {
        lekturaIdx: number,
        opracowanieIdx: number,
    },
};

export default function OpracowaniePage({ params }: OpracowanieProps) {
    const [jsonData, setJsonData] = useState<any>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [getNotes, setNotes, hasNotes] = useNotes('opracowania');

    const saveNotes = (content: string) => {
        setModalOpen(false);
        setNotes(params.lekturaIdx, params.opracowanieIdx, content);
    };

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
            {modalOpen && (
                <NoteModal content={getNotes(params.lekturaIdx, params.opracowanieIdx)} onClose={() => setModalOpen(false)} onSave={saveNotes}></NoteModal>
            )}

            <h1 className='text-center text-3xl font-bold my-10'>Opracowanie pytania:</h1>
            <a className='text-blue-500 pb-5' href='/polski/opracowania'>&lt;&lt; Powrót</a>
            <h2 className='font-bold mb-10'>{jsonData[params.lekturaIdx].opracowania[params.opracowanieIdx].pytanie}</h2>

            <p className='text-justify'>{jsonData[params.lekturaIdx].opracowania[params.opracowanieIdx].opracowanie}</p>

            <hr className='my-10' />
            <h2 className='font-bold mb-10'>
                Zapisane notatki

                <button type="button" className="ml-5 inline-flex items-center py-2 px-3 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200" onClick={() => setModalOpen(true)}>
                    Notatki
                    <span className="material-symbols-outlined inline-flex items-center justify-center ml-1">
                        edit
                    </span>
                </button>
            </h2>

            {hasNotes(params.lekturaIdx, params.opracowanieIdx) && (
                <>
                    <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-100 whitespace-pre-wrap break-words">
                        <p className="text-xl italic font-medium leading-relaxed text-gray-900">
                            {getNotes(params.lekturaIdx, params.opracowanieIdx)}
                        </p>
                    </blockquote>
                </>
            )}
        </div>
    );
}
