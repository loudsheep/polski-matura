"use client"

import React, { useState } from 'react'

type AddCustomTimerModalProps = {
    onClose: () => void,
    addTimer: (title: string, date: string, time: string) => void,
};

export default function AddCustomTimerModal(props: AddCustomTimerModalProps) {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    const saveTimer = () => {
        props.addTimer(title, date, time);
    };

    const handleTimeChange = (time: string) => {
        setTime(time);
    }

    const handleDateChange = (date: string) => {
        setDate(date);
    };

    return (
        <div id="authentication-modal" aria-hidden="true" className="fixed inset-0 inset-x-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all h-[100vh] max-h-full w-full bg-black bg-opacity-60">
            <div className="relative p-4 w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Dodaj nowe odliczanie
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
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nazwa</label>
                                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Twoja nazwa..." required value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="grid gap-6 mb-10 md:grid-cols-2">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Data wydarzenia (do odliczania)</label>
                                    <input type="date" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Data wydarzenia" required value={date} onChange={(e) => handleDateChange(e.target.value)} />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Czas wydarzenia (do odliczania)</label>
                                    <input type="time" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Data wydarzenia" required value={time} onChange={(e) => handleTimeChange(e.target.value)} />
                                </div>
                            </div>

                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={saveTimer}>Dodaj</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
