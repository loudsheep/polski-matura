"use client";

import useRandomTask from "@/hooks/useRandomTask";
import { useState } from "react";

type RandomTaskCardProps = {
    listId: number;
};

export default function RandomTaskCard(props: RandomTaskCardProps) {
    const [getListDataForTable, addTaskList, getList, getListDetails, editStatus, deleteList, getListNotDoneTasks] = useRandomTask("losowe_zadania");
    const [task, setTask] = useState<any>(null);

    const getRandomTask = () => {
        let tasks = getListNotDoneTasks(props.listId);

        let task = tasks[Math.floor(Math.random() * tasks.length)];

        setTask(task);
    };

    return (
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow my-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{task ? "Wylosowano zadanie: " + task.number : "Wylosuj losowe zadanie do zrobienia"}</h5>
            <p className="font-normal text-gray-700 ">Wylosuj jedno z jeszcze nie zrobionych zadań</p>

            <button className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={getRandomTask}>
                {task ? "Następne": "Wylosuj"}
            </button>
        </div>
    )
}
