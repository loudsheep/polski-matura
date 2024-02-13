"use client"
import React, { useState } from "react";
import UnitOne from "./UnitOne";
import UnitTwo from "./UnitTwo";
import UnitThree from "./UnitThree";
import UnitFour from "./UnitFour";
import UnitFive from "./UnitFive";
import UnitSix from "./UnitSix";

export default function Grammar_Page() {
    const [clickedButton, setClickedButton] = useState<number | null>(null);

    const handleClick = (buttonNumber: number) => {
        setClickedButton(buttonNumber);
    };

    const handleMenuClose = () => {
        setClickedButton(null);
    };

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-20">

            <div className="xl:fixed  xl:left-5 xl:top-28 xl:w-48 bg-gray-100 mt-5 xl:mt-0 text-black flex flex-col items-center z-50 border-gray-500 border-2 rounded-md">
                <h2 className="text-xl font-bold mb-4">Tematy</h2>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(1)}>Simple & Continuous Forms</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(2)}>Narrative Tenses</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(3)}>Future Forms</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(4)}>Verb patterns & modals</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(5)}>Substitution & elipsis / Hypothethical meaning</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(6)}>Comparing / Modifying adverbs</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(7)}>Conditionals</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(8)}>Reported Speech</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(9)}>Future in the past</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(10)}>Participle clauses</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(11)}>Passive forms</button>
                <button style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(12)}>Cohesion & Emphasis</button>
            </div>

            <div className="flex-grow p-8">
                {clickedButton == null && (
                    <UnitOne></UnitOne>
                )}
                {clickedButton == 1 && (
                    <UnitOne></UnitOne>
                )}
                {clickedButton == 2 && (
                    <UnitTwo></UnitTwo>
                )}

                {clickedButton == 3 && (
                    <UnitThree></UnitThree>
                )}

                {clickedButton == 4 && (
                    <UnitFour></UnitFour>
                )}

                {clickedButton == 5 && (
                    <UnitFive></UnitFive>
                )}

                {clickedButton == 6 && (
                    <UnitSix></UnitSix>
                )}
            </div>
        </div>
    );

}