"use client";

import useRandomTask from "@/hooks/useRandomTask";
import { useState } from "react";

type RandomTaskCardProps = {
    listId: number;
    getListNotDoneTasks: (id: number) => {
        number: string;
        status?: "done" | "to_revision" | "too_hard" | undefined;
    }[];
    setNewStatus: (taskId: string, status: "done" | "to_revision" | "too_hard") => void,
};

export default function RandomTaskCard(props: RandomTaskCardProps) {
    // const [getListDataForTable, addTaskList, getList, getListDetails, editStatus, deleteList, getListNotDoneTasks] = useRandomTask("losowe_zadania");
    const [task, setTask] = useState<any>(null);
    const [taskIdx, setTaskIdx] = useState<number>(-1);

    const getRandomTask = () => {
        let tasks = props.getListNotDoneTasks(props.listId);

        let idx = Math.floor(Math.random() * tasks.length);
        let task = tasks[idx];

        setTaskIdx(idx);
        setTask(task);
    };

    const setStatus = (status: "done" | "to_revision" | "too_hard") => {
        if (task) {
            props.setNewStatus(task.number, status);

            let task2 = JSON.parse(JSON.stringify(task));
            task2.status = status;

            setTask(task2);
        }
    };

    return (
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow my-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{task ? "Wylosowano zadanie: " + task.number : "Wylosuj losowe zadanie do zrobienia"}</h5>

            {task ? (
                <div className="flex">
                    <button type="button" onClick={() => setStatus("done")} className={"hover:text-white border border-green-500 hover:bg-green-600 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 " + (task.status == "done" ? "bg-green-600 text-white" : "text-green-500")}>Zrobione</button>

                    <button type="button" onClick={() => setStatus("to_revision")} className={"hover:text-white border border-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 " + (task.status == "to_revision" ? "bg-yellow-600 text-white" : "text-yellow-500")}>Do powtórki</button>

                    <button type="button" onClick={() => setStatus("too_hard")} className={"hover:text-white border border-red-500 hover:bg-red-600 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2 " + (task.status == "too_hard" ? "bg-red-600 text-white" : "text-red-500")}>Za trudne</button>
                </div>
            ) : (
                <p className="font-normal text-gray-700 ">Wylosuj jedno z jeszcze nie zrobionych zadań</p>
            )}

            <button className="inline-flex items-center px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={getRandomTask}>
                {task ? "Następne" : "Wylosuj"}
            </button>
        </div>
    )
}
