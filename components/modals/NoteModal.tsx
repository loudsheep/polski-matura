"use client"

import React, { useState } from 'react'

type NoteModalProps = {
    onSave: (content: string) => void,
    onClose: () => void,
    content: string,
};

export default function NoteModal(props: NoteModalProps) {
    const [content, setContent] = useState<string>(props.content);

    return (
        <div id="authentication-modal" aria-hidden="true" className="fixed inset-0 inset-x-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all h-[100vh] max-h-full w-full bg-black bg-opacity-60">
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Notatki do opracowania
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  " data-modal-hide="authentication-modal" onClick={props.onClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Zamknij</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <div className="space-y-4">
                            <div>
                                <textarea id="notes" rows={10} value={content} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Napisz notatki tutaj..." onChange={(e) => setContent(e.target.value)}></textarea>
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => props.onSave(content)}>Zapisz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
