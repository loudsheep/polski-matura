import { useState, useEffect } from "react";

type readingFile = {
    heading: string[],
    type: string,
    text: string[],
    questions: any[]
}

export default function ReadingOne({ heading, text, type, questions }: readingFile) {
    const SetLocalStorage = (item: string[]) => {
        const saving_format = item.join(";");
        localStorage.setItem("taskOne", saving_format);
    }
    const initialTaskList = localStorage.getItem("taskOne")?.split(';') || [Array(questions.length).fill("X")];
    const [taskList, setTaskList] = useState<any[]>(initialTaskList);


    useEffect(() => {
        SetLocalStorage(taskList);
    }, [taskList]);

    const ChangeAnswer = (index: number, answer: string) => {
        const newAns = [...taskList];
        newAns[index] = answer;
        setTaskList(newAns);
    }


    return (
        <div className="">
            {heading && heading.map((v2: any, idx: any) =>
                <div key={idx} className="my-container whitespace-pre-line">
                    <h2 className="text-3xl font-semibold mb-4">{heading[idx]}</h2>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">{text[idx]}</p>
                </div>
            )
            }
            {questions && questions.map((v3: any, idx3: any) =>
                <div key={idx3} className="mb-8">
                    <h4 className="text-xl font-semibold mb-4">{idx3 + 1}. {v3.question}</h4>
                    <div className="flex flex-col">
                        <div className="flex gap-2 lg:gap-4"><div className="w-8 flex place-content-between items-center"><label htmlFor={idx3 + "-a"} className="font-semibold">A</label><input id={idx3 + "-a"} type="radio" value={"A"} name={idx3} onChange={(e) => ChangeAnswer(idx3, e.target.value)} checked={taskList[idx3] == "A"} /></div><label htmlFor={idx3 + "-a"} className="ml-2">{v3.options.A}</label></div>
                        <div className="flex gap-2 lg:gap-4"><div className="w-8 flex place-content-between items-center"><label htmlFor={idx3 + "-b"} className="font-semibold">B</label><input id={idx3 + "-b"} type="radio" value={"B"} name={idx3} onChange={(e) => ChangeAnswer(idx3, e.target.value)} checked={taskList[idx3] == "B"} /></div><label htmlFor={idx3 + "-b"} className="ml-2">{v3.options.B}</label></div>
                        <div className="flex gap-2 lg:gap-4"><div className="w-8 flex place-content-between items-center"><label htmlFor={idx3 + "-c"} className="font-semibold">C</label><input id={idx3 + "-c"} type="radio" value={"C"} name={idx3} onChange={(e) => ChangeAnswer(idx3, e.target.value)} checked={taskList[idx3] == "C"} /></div><label htmlFor={idx3 + "-c"} className="ml-2">{v3.options.C}</label></div>
                        <div className="flex gap-2 lg:gap-4"><div className="w-8 flex place-content-between items-center"><label htmlFor={idx3 + "-d"} className="font-semibold">D</label><input id={idx3 + "-d"} type="radio" value={"D"} name={idx3} onChange={(e) => ChangeAnswer(idx3, e.target.value)} checked={taskList[idx3] == "D"} /></div><label htmlFor={idx3 + "-d"} className="ml-2">{v3.options.D}</label></div>
                    </div>
                </div>
            )}
        </div>
    )

}