"use client"
import React, { useState } from "react";
import UnitOne from "./UnitOne";
import UnitTwo from "./UnitTwo";
import UnitThree from "./UnitThree";
import UnitFour from "./UnitFour";
import UnitFive from "./UnitFive";
import UnitSix from "./UnitSix";
import UnitSeven from "./UnitSeven";
import UnitEight from "./UnitEight";
import UnitNine from "./UnitNine";
import UnitTen from "./UnitTen";
import UnitEleven from "./UnitEleven";
import UnitTwelve from "./UnitTwelve";

export default function Grammar_Page() {
    const [clickedButton, setClickedButton] = useState<number | null>(null);
    const [topicArray, setTopicArray] = useState<any[]>(["Simple & Continuous Forms", "Narrative Tenses", "Future Forms", "Verb patterns & modals", "Substitution & elipsis / Hypothethical meaning", "Comparing / Modifying adverbs", "Conditionals", "Reported Speech", "Future in the past", "Participle clauses", "Passive forms", "Cohesion & Emphasis"])

    const handleClick = (buttonNumber: number) => {
        setClickedButton(buttonNumber);
    };

    const handleMenuClose = () => {
        setClickedButton(null);
    };

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-20">

            <div className="xl:fixed xl:left-5 xl:top-28 xl:w-64 bg-gray-100 mt-5 xl:mt-0 text-black flex flex-col items-center z-50 border-gray-500 border-2 rounded-md">
                <h2 className="text-xl font-bold mb-4">Tematy</h2>
                {topicArray.map((value, index ) =>
                    <button key={index} style={{ width: '90%' }} className="text-black px-4 py-2 mb-2 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2" onClick={() => handleClick(index + 1)}>{value}</button>
                )}
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

                {clickedButton == 7 && (
                    <UnitSeven></UnitSeven>
                )}
                {clickedButton == 8 && (
                    <UnitEight></UnitEight>
                )}
                {clickedButton == 9 && (
                    <UnitNine></UnitNine>
                )}
                {clickedButton == 10 && (
                    <UnitTen></UnitTen>
                )}
                {clickedButton == 11 && (
                    <UnitEleven></UnitEleven>
                )}
                {clickedButton == 12 && (
                    <UnitTwelve></UnitTwelve>
                )}
            </div>
        </div>
    );

}