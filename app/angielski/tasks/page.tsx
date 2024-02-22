"use client"
import { useEffect, useState } from "react";
import ReadingOne from "./ReadingOne";
import ReadingTwo from "./ReadingTwo";
import ReadingTri from "./ReadingTri";
import Popup from "./popup";

type readingFile = {
    headings: string[],
    type: string,
    text: string[],
    questions: any[]
}


export default function Tasks_Page() {
    const [jsonData, setJsonData] = useState<any[]>([]);
    const [selectedTask, setSelectedTask] = useState<Number | null>(1);
    const [element, setElement] = useState<any | null>(null);
    const [elementTwo, setElementTwo] = useState<any | null>(null);
    const [elementTri, setElementTri] = useState<any | null>(null);

    const [multipleChoiceTab, setMultipleChoiceTab] = useState<any[]>([]);
    const [insertParagraphTab, setInsertParagraphTab] = useState<any[]>([]);
    const [chooseWriterTab, setChooseWriterTab] = useState<any[]>([]);
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
        'Content 1': false,
        'Content 2': false,
        'Content 3': false
    });
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenPopup = () => {
        let total = 0;
        let total_correct = 0;
        let one_answers :any = localStorage.getItem("taskOne")?.split(';');
        for (let i = 0; i<  element.questions.length; i++) {
            if (element.questions[i].correct_answer == one_answers[i]) {
                total_correct += 1
            }
            total += 1
        }
        let two_answers :any = localStorage.getItem("taskTwo")
        
        console.log(two_answers);
        localStorage.setItem("exam_result", String(Math.random() * 100));
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    const handleCheckboxChange = (index: Number) => {
        setSelectedTask(index)
    };
    const CheckValues = (values: string[]) => {
        let idx = 1
        for (let value of values) {
            const v = localStorage.getItem(value)
            const prev = checkedItems;
            switch (value) {
                case "taskOne":
                    if (v?.split(";").length == element?.questions.length && v != "") {
                        handleCheckboxChange(idx)
                    }
            }
            idx++;
        }
    }
    const fetchDataAndSort = async () => {
        try {
            const response = await fetch('/data/matura_files/reading_tasks.json');
            const data = await response.json();
            // Sort and select elements
            SortAndSelect(data);
        } catch (error) {
            console.error('Error fetching or processing JSON data:', error);
        }
    };

    const SortAndSelect = (jsonTab: readingFile[]) => {
        const multipleChoiceArray: readingFile[] = [];
        const chooseWriterArray: readingFile[] = [];
        const insertParagraphArray: readingFile[] = [];

        for (let element of jsonTab) {
            switch (element.type) {
                case "multiple choice":
                    multipleChoiceArray.push(element);
                    break;
                case "choose_writer":
                    chooseWriterArray.push(element);
                    break;
                case "insert paragraphs":
                    insertParagraphArray.push(element);
                    break;
                default:
                    break;
            }
        }

        setMultipleChoiceTab(multipleChoiceArray);
        setChooseWriterTab(chooseWriterArray);
        setInsertParagraphTab(insertParagraphArray);
        localStorage.removeItem("taskOne")
        localStorage.removeItem("taskTwo")
        localStorage.removeItem("taskTri")
    };

    useEffect(() => {
        fetchDataAndSort();
    }, []);

    useEffect(() => {
        setInterval(() => {
            CheckValues(["taskOne"]);
        }, 3000)
    }, [])

    useEffect(() => {
        const id_one = Math.floor(Math.random() * multipleChoiceTab.length);
        const id_tri = Math.floor(Math.random() * chooseWriterTab.length);
        const id_two = Math.floor(Math.random() * insertParagraphTab.length);

        setElement(multipleChoiceTab[id_one] || null);
        setElementTwo(insertParagraphTab[id_two] || null);
        setElementTri(chooseWriterTab[id_tri] || null);
    }, [multipleChoiceTab, chooseWriterTab, insertParagraphTab]);

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-3/5 mx-auto flex-col items-center mb-20 text-justify">
            <div className="flex space-x-4 mb-4">
                {Object.keys(checkedItems).map((content, index) => (
                    <button
                        key={content}
                        className={`py-2 px-4 mt-5 rounded-md ${checkedItems[content] ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}
                        onClick={() => handleCheckboxChange(index + 1)}
                    >

                    </button>
                ))}
                <button className={`mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} onClick={handleOpenPopup}>Zakończ</button>
                <Popup isOpen={isOpen} onClose={handleClosePopup} />
            </div>
            {element && selectedTask == 1 && (
                <div>
                    <h1 className="text-4xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingOne type={element.type} heading={element.heading} text={element.text} questions={element.questions}></ReadingOne>
                </div>
            )}
            {element && selectedTask == 2 && (
                <div>
                    <h1 className="text-4xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingTwo type={elementTwo.type} heading={elementTwo.heading} text={elementTwo.text} questions={elementTwo.questions}></ReadingTwo>
                </div>
            )}
            {element && selectedTask == 3 && (
                <div>
                    <h1 className="text-4xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingTri type={elementTri.type} heading={elementTri.heading} text={elementTri.text} questions={elementTri.questions}></ReadingTri>
                </div>
            )}
        </div>
    )
}