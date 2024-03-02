"use client";

import RandomTaskCard from "@/components/RandomTaskCard";
import useRandomTask from "@/hooks/useRandomTask";
import { TasksObject } from "@/types/Tasks";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

type ListaProps = {
    params: {
        listaId: number,
    },
};

const colorForStatus = (status: undefined | "done" | "to_revision" | "too_hard") => {
    switch (status) {
        case "done": return " text-green-500";
        case "to_revision": return " text-yellow-500";
        case "too_hard": return " text-red-500";
        default: return ""
    }
};

export default function ListaPage(props: ListaProps) {
    const [getTableData, addTask, getList, getDetails, editStatus, deleteList, getListNotDoneTasks] = useRandomTask("losowe_zadania");
    const [listDetails, setListDetails] = useState<TasksObject | null | "loading">("loading");
    const [seed, setSeed] = useState<number>(0);

    const selectStatus = (rangeIdx: number, taskIdx: string, newStatus: "done" | "to_revision" | "too_hard") => {
        editStatus(props.params.listaId, rangeIdx, taskIdx, newStatus);
        // setSeed(Math.round(Math.random() * 1_000_000_000));
    };

    const cardSetStatus = (taskId: string, status: "done" | "to_revision" | "too_hard") => {

        console.log("SETTIN STATUS1");
        if (listDetails == null || listDetails == "loading") return;
        console.log("SETTIN STATUS2");

        for (let r = 0; r<listDetails.ranges.length; r ++) {
            for (const task of listDetails.ranges[r].tasks) {
                if (task.number == taskId) {
                    editStatus(props.params.listaId, r, taskId, status);
                }
            }
        }

    };

    useEffect(() => {
        setListDetails(getList(props.params.listaId));
    });

    if (listDetails == "loading") return <div>Ładowanie</div>;
    if (listDetails == null) {
        return (
            <div className='w-1/2 mx-auto flex-col items-center'>
                <h1 className='text-center text-3xl font-bold my-10'>Nie znaleziono listy zadań</h1>
                <a className='text-blue-500 pb-5' href='/losowanie'>&lt;&lt; Powrót do strony głównej losowania</a>
            </div>
        )
    }

    return (
        <div className='w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center mb-20'>
            <a className='block text-blue-500 pb-5 mt-10' href='/losowanie'>&lt;&lt; Powrót</a>
            <h1 className='text-3xl'>Lista zadań <strong>{listDetails.name}</strong></h1>

            <div className="w-full my-10 flex justify-between">
                <h1 className="text-2xl"><strong>{getDetails(listDetails.id)?.numTasks}</strong> zadań</h1>
                <h1 className="text-2xl text-green-600"><strong>{getDetails(listDetails.id)?.done}</strong> zrobionych</h1>
            </div>

            {getDetails(listDetails.id)?.numTasks != getDetails(listDetails.id)?.done && (
                <RandomTaskCard listId={listDetails.id} getListNotDoneTasks={getListNotDoneTasks} setNewStatus={cardSetStatus} key={seed}></RandomTaskCard>
            )}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Numer zadania
                            </th>
                            <th className="px-6 py-4">
                                Status
                            </th>
                        </tr>
                        {listDetails.ranges.map((range, idx) => (
                            <>
                                {range.tasks.map((value, idx2) => (
                                    <tr className="odd:bg-white even:bg-gray-50 border-b" key={idx + " " + idx2}>
                                        <td className="px-6 py-4">
                                            {value.number}
                                        </td>
                                        <td className={"px-6 py-4" + colorForStatus(value.status)}>
                                            <select name="" id="" value={value.status} className="cursor-pointer" onChange={(e) => selectStatus(idx, value.number, e.target.value as any)}>
                                                <option value="">Wybierz</option>
                                                <option value="done">Zrobione</option>
                                                <option value="to_revision">Do powtórki</option>
                                                <option value="too_hard">Za trudne</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
