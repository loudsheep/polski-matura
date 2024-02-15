"use client"
import { useEffect, useState } from "react";
import ReadingOne from "./readingOne";
import ReadingTwo from "./readingTwo";

type readingFile = {
    headings: string[],
    type: string,
    text: string[],
    questions: any[]
}
export default function Tasks_Page() {
    const [jsonData, setJsonData] = useState<any[] | null>([]);
    const [selectedTask, setSelectedTask] = useState<Number | null>(1);
    const [element, setElement] = useState<any | null>(null);

    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
        'Content 1': false,
        'Content 2': false,
        'Content 3': false,
    });

    const handleCheckboxChange = (index : Number) => {
        setSelectedTask(index)
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/matura_files/reading_tasks.json');
                const data = await response.json();
                console.log(data);
                setJsonData(data);
                const element: readingFile = data[0];
                setElement(element);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        fetchData();
    }, []);

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
                    <ReadingTwo type={element.type} heading={element.heading} text={element.text} questions={element.questions}></ReadingTwo>
                </div>
            )}
        </div>
    )
}