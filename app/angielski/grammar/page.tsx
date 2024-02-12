"use client"
import React, { useState } from "react";
import UnitOne from "./UnitOne";
import UnitTwo from "./UnitTwo";

export default function Grammar_Page() {
    const [clickedButton, setClickedButton] = useState<number | null>(null);

    const handleClick = (buttonNumber: number) => {
        setClickedButton(buttonNumber);
    };

    const handleMenuClose = () => {
        setClickedButton(null);
    };

    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-full w-48 bg-gray-800 text-white flex flex-col items-center justify-center z-50">
                <h2 className="text-xl font-bold mb-4">Tematy</h2>
                <button style={{ width: '90%' }} className="text-white px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => handleClick(1)}>Simple & Continuous Forms</button>
                <button style={{ width: '90%' }} className="text-white px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => handleClick(2)}>Narrative Tenses</button>
                <button style={{ width: '90%' }} className="text-white px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => handleClick(3)}>Button 3</button>
            </div>
            <div className="flex-grow ml-48 p-8">
                {clickedButton == null && (
                    <UnitOne></UnitOne>
                )}
                {clickedButton == 1 && (
                    <UnitOne></UnitOne>
                )}
                {clickedButton == 2 && (
                    <UnitTwo></UnitTwo>
                )}
            </div>
        </div>
    );

}