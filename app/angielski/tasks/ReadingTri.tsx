import { useState, useEffect } from "react";

type readingFile = {
    heading: string[],
    type: string,
    text: string[],
    questions: any[]
}

export default function ReadingTri({ heading, text, type, questions }: readingFile) {
    const SetLocalStorage = (item: string[]) => {
        const saving_format = item.join(";");
        localStorage.setItem("taskTri", saving_format);
    }
    const answers = ["A", "B", "C", "D", "E", "F"]
    const initialTaskList = localStorage.getItem("taskTri")?.split(';') || [Array(questions.length).fill("X")];
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
        <div>
            <h1 className="text-3xl font-bold mb-4 whitespace-pre-line">{heading[heading.length - 1]}</h1>
            <div className="m-8">
                {heading && heading.map((v2: any, idx: any) =>
                    <div>{idx != heading.length - 1 && (
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{v2}</h1>
                            <p className="text-base text-gray-700 leading-relaxed mb-4">{text[idx]}</p>
                        </div>
                    )}</div>
                )
                }
                <hr></hr>
                {questions && questions[0].options.map((v3: any, idx3: any) =>
                    <div key={idx3} className="m-8 flex">
                        <h4 className="text-xl font-semibold text-blue-500 mb-4">{idx3 + 1}. {v3}</h4>
                        <select className="ml-5">
                            {text && text.map((value : string, idx : number) => 
                                <option value={answers[idx]}>{answers[idx]}</option>
                            )}
                        </select>
                    </div>
                )}
            </div>
        </div>
    )

}