'use client';

import React, { useState, useEffect } from 'react';

export default function EpokiQuizPage() {
    const [jsonData, setJsonData] = useState<any>(null);
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    function shuffleArray(array: any) {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
        }

        return shuffledArray;
    }

    const selectAnswer = (idx: number) => {
        setSelectedIdx(idx);
        setShowAnswer(true);
    }

    const getClass = (idx: number) => {
        if (!showAnswer) return "bg-gray-200";

        if (jsonData[currentQuestionIdx].poprawna_odpowiedz == jsonData[currentQuestionIdx].odpowiedzi[idx]) {
            return "bg-green-500";
        }

        if (selectedIdx == idx) {
            return "bg-red-500";
        }

        return "bg-gray-200";
    };

    const next = () => {
        setSelectedIdx(null);
        setShowAnswer(false);
        setCurrentQuestionIdx((currentQuestionIdx + 1) % jsonData.length);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/epoki/quiz.json');
                const data = await response.json();
                let tmp = shuffleArray(data.quiz);
                setJsonData(tmp);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-1/2 mx-auto flex flex-col items-center'>
            {jsonData != null && (
                <div className='w-full flex flex-col items-center my-20'>
                    <h1 className='text-xl font-bold mb-10'>{jsonData[currentQuestionIdx].pytanie}</h1>

                    {jsonData[currentQuestionIdx].odpowiedzi.map((value: any, idx: any) => (
                        <p onClick={() => selectAnswer(idx)} className={`w-3/4 rounded-md py-5 my-2 px-3 cursor-pointer ${getClass(idx)}`}>{value}</p>
                    ))}
                </div>
            )}

            <button onClick={next} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-lg px-8 py-4 me-2 mb-20 foc:outline-none">Następne</button>
        </div>
    )
}
