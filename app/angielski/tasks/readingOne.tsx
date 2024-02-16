import { useState, useEffect } from "react";

type readingFile = {
    heading: string[],
    type: string,
    text: string[],
    questions: any[]
}
export default function ReadingOne({heading, text, type, questions}: readingFile) {
    const SetLocalStorage = (item : string[]) => {
        const saving_format = item.join(";");
        localStorage.setItem("taskOne", saving_format);
        console.log(localStorage.getItem("taskOne"));
    }
    const [taskList, setTaskList] = useState<string[]>([]);

    useEffect(() => {
        if (localStorage.getItem("taskOne") != "") {
            setTaskList(prevTaskList => {
                const updatedTaskList = [];
                for (let i = 0; i < questions.length; i++) {
                    updatedTaskList.push("X");
                }
                return updatedTaskList;
            });
        }
    }, [])

    useEffect(() => {
        // This effect will run whenever taskList changes
        SetLocalStorage(taskList);
    }, [taskList]);

    const ChangeAnswer = (index: number, answer : string) => {
        console.log(index, answer);
        const newAns = [...taskList];
        newAns[index] = answer;
        setTaskList(newAns);
    }


    return (
            <div className="m-8">
                {heading && heading.map((v2: any, idx: any) =>
                    <div key={idx}>
                        <h1 className="text-3xl font-bold mb-4">{heading[idx]}</h1>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">{text[idx]}</p>
                    </div>
                )
                }
                {questions && questions.map((v3: any, idx3: any) =>
                    <div key={idx3} className="m-8">
                        <h4 className="text-xl font-semibold text-blue-500 mb-4">{idx3 + 1}. {v3.question}</h4>
                        <span className="mr-1"><b>A</b></span><input type="radio" value={"A"} onChange={(e) => ChangeAnswer(idx3, e.target.value)}/><span className="ml-2">{v3.options.A}</span><br></br>
                        <span className="mr-1"><b>B</b></span><input type="radio" value={"B"} onChange={(e) => ChangeAnswer(idx3, e.target.value)}/><span className="ml-2">{v3.options.B}</span><br></br>
                        <span className="mr-1"><b>C</b></span><input type="radio" value={"C"} onChange={(e) => ChangeAnswer(idx3, e.target.value)}/><span className="ml-2">{v3.options.C}</span><br></br>
                        <span className="mr-1"><b>D</b></span><input type="radio" value={"D"} onChange={(e) => ChangeAnswer(idx3, e.target.value)}/><span className="ml-2">{v3.options.D}</span><br></br>
                    </div>
                )}
            </div>
            )
            
}