"use client"
import { useEffect, useState } from "react";
import ReadingOne from "./ReadingOne";
import ReadingTwo from "./ReadingTwo";
import ReadingTri from "./ReadingTri";

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
        'Content 3': false,
        'Content 4': false,
        'Content 5': false,
        'Content 6': false,
        'Content 7': false,
        'Content 8': false,
    });

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
                    if (!v?.includes("X")) {
                        prev[`Content ${idx}`] = true;
                        setCheckedItems(prev);
                        console.log(checkedItems)
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
    };

    useEffect(() => {
        fetchDataAndSort();
    }, []);

    useEffect(() => {
        setInterval(() => {
            CheckValues(["taskOne"]);
            console.log("here");
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
            </div>
            {/* <div className="p-8">
                <div className="flex space-x-4 mb-4">
                    {Object.keys(checkedItems).map((content) => (
                        <button
                            key={content}
                            className={`py-2 px-4 rounded-md ${checkedItems[content] ? 'bg-green-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleCheckboxChange(content)}
                        >
                            {content}
                        </button>
                    ))}
                </div> */}

            {/* Content area
                <div className="border p-4">
                    {Object.keys(checkedItems).map((content) => (
                        <div key={content} className="mb-2">
                            <input
                                type="checkbox"
                                checked={checkedItems[content]}
                                onChange={() => handleCheckboxChange(content)}
                                className="mr-2"
                            />
                            <span>{content}</span>
                        </div>
                    ))}
                </div>
            </div> */}
            {element && selectedTask == 1 && (
                <div>
                    <h1 className="text-3xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingOne type={element.type} heading={element.heading} text={element.text} questions={element.questions}></ReadingOne>
                </div>
            )}
            {element && selectedTask == 2 && (
                <div>
                    <h1 className="text-3xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingTwo type={elementTwo.type} heading={elementTwo.heading} text={elementTwo.text} questions={elementTwo.questions}></ReadingTwo>
                </div>
            )}
            {element && selectedTask == 3 && (
                <div>
                    <h1 className="text-3xl font-bold mb-4"> Task {String(selectedTask)}</h1>
                    <ReadingTri type={elementTri.type} heading={elementTri.heading} text={elementTri.text} questions={elementTri.questions}></ReadingTri>
                </div>
            )}
        </div>
    )
}