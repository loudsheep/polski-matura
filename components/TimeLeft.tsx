import ShiftingCountdown from './ShiftingCountdown';

interface Exam {
    date: string;
    subject: string;
}

const exams: Exam[] = [
    { date: '2024-05-07 09:00:00', subject: 'Język polski (poziom podstawowy)' },
    { date: '2024-05-08 09:00:00', subject: 'Matematyka (poziom podstawowy)' },
    { date: '2024-05-09 09:00:00', subject: 'Język angielski (poziom podstawowy)' },
    { date: '2024-05-13 09:00:00', subject: 'Język angielski (poziom rozszerzony)' },
    { date: '2024-05-15 09:00:00', subject: 'Matematyka (poziom rozszerzony)' },
    { date: '2024-05-22 09:00:00', subject: 'Informatyka (poziom rozszerzony)' },
    { date: '2024-05-23 09:00:00', subject: 'Fizyka (poziom rozszerzony)' },
];

function TimeLeft() {
    return (
        <div className='flex flex-wrap'>
            {/* Mapowanie egzaminów na komponenty ShiftingCountdown */}
            {exams.map((exam, index) => (
                <>
                    {/* Check if date is in future */}
                    {new Date(exam.date).valueOf() > Date.now() && (
                        <ShiftingCountdown key={index} countdownDateTo={exam.date} title={exam.subject}></ShiftingCountdown>
                    )}
                </>
            ))}
        </div>
    );
}

export default TimeLeft;
