"use client"

import ListRange from '@/lib/ListRange';
import { TaskRange } from '@/types/Tasks';
import React, { useState } from 'react'

type AddListModalProps = {
    onClose: () => void,
    addTask: (name: string, list: TaskRange[]) => void,
};

export default function AddListModal(props: AddListModalProps) {
    const [name, setName] = useState<string>("");
    const [ranges, setRanges] = useState<ListRange>(new ListRange());
    const [toRenderFields, setToRenderFields] = useState<any[]>([0]);

    const changeRange = (rangeIdx: number, type: "start" | "end", value: string) => {
        // range exists, modify it
        if (rangeIdx < ranges.length()) {
            setRanges(
                ranges.editRange(rangeIdx, type, value),
            );
        } else {
            setRanges(
                ranges.addRange(type == "start" ? value : null, type == "end" ? value : null),
            );
        }
        setToRenderFields(ranges.renderFields());
    };

    const saveList = () => {
        if (!ranges.validForSave()) {
            alert("Coś jest nie tak z zakresami zadań");
            return;
        }

        if (name == "") {
            alert("Nazwa nie może być pusta");
            return;
        }

        props.addTask(name, ranges.getRanges());
        props.onClose();
    };

    return (
        <div id="authentication-modal" aria-hidden="true" className="fixed inset-0 inset-x-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all h-[100vh] max-h-full w-full bg-black bg-opacity-60">
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Dodaj nową listę
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
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nazwa listy</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Twoja nazwa..." required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            {toRenderFields.map((_, idx) => (
                                <div className="grid gap-6 mb-10 md:grid-cols-2" key={idx}>
                                    <div>
                                        <label htmlFor="range_start" className="block mb-2 text-sm font-medium text-gray-900 ">Początek zakresu zadań</label>
                                        <input type="text" id="range_start" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Pierwsze zadanie z zakresu" required onChange={(e) => changeRange(idx, "start", e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="range_end" className="block mb-2 text-sm font-medium text-gray-900 ">Koniec zakresu zadań</label>
                                        <input type="text" id="range_end" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ostatnie zadanie z zakresu" required onChange={(e) => changeRange(idx, "end", e.target.value)} />
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 text-justify" role="alert">
                                <span className="font-medium">Uwaga!</span> Zakresy podaj odzielnie i ewentualne seperatory powinny być kropką, dopuszczalne znaki to cyfry, litery (duże i małe) oraz kropka. Np. 1, A.1, D.13.1, ...
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={saveList}>Dodaj</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
