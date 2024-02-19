'use client';

import { useState, useEffect } from 'react';

// Typ danych dla egzaminu
interface Exam {
    date: Date;
    subject: string;
}

// Lista egzaminów
const exams: Exam[] = [
    { date: new Date('2024-05-07T09:00:00'), subject: 'Język polski (poziom podstawowy)' },
    { date: new Date('2024-05-08T09:00:00'), subject: 'Matematyka (poziom podstawowy)' },
    { date: new Date('2024-05-15T09:00:00'), subject: 'Matematyka (poziom rozszerzony)' },
    { date: new Date('2024-05-09T09:00:00'), subject: 'Język angielski (poziom podstawowy)' },
    { date: new Date('2024-05-13T09:00:00'), subject: 'Język angielski (poziom rozszerzony; poziom dwujęzyczny)' },
    { date: new Date('2024-05-22T09:00:00'), subject: 'Informatyka (poziom rozszerzony)' },
];

// Komponent licznika czasu do egzaminu
function ExamCountdown({ exam }: { exam: Exam }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(exam));
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(exam));
        }, 1000);

        return () => clearTimeout(timer);
    });

    function calculateTimeLeft(exam: Exam) {
        const now = new Date();
        return Math.max(exam.date.getTime() - now.getTime(), 0);
    }

    function formatTime(milliseconds: number) {
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

        return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    return (
        <div className="p-4 mb-4 bg-gray-200 rounded-lg cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <p className="font-bold">{exam.subject}</p>
            <p>{formatTime(timeLeft)}</p>
            {isHovered && (
                <div className="mt-2 bg-white p-2 rounded-md shadow-md">
                    <p>{exam.date.toLocaleString()}</p>
                </div>
            )}
        </div>
    );
}

// Komponent główny
function TimeLeft() {
    return (
        <div>
            <h1 className="mb-4 text-xl font-bold">Kiedy matury:</h1>
            {/* Mapowanie egzaminów na komponenty CountdownExam */}
            {exams.map((exam, index) => (
                <ExamCountdown key={index} exam={exam} />
            ))}
        </div>
    );
}

export default TimeLeft;
