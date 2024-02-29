"use client";

import AddListModal from "@/components/modals/AddListModal";
import DeleteListModal from "@/components/modals/DeleteListModal";
import useRandomTask from "@/hooks/useRandomTask";
import Link from "next/link";
import { useState } from "react";

export default function GeneratorPage() {
    const [getTableData, addTask, getList, getListDetails, editStatus, deleteList] = useRandomTask();

    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [deleteIdx, setDeleteIdx] = useState<number>(-1);

    const closeAddModal = () => setAddModalOpen(false);

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setDeleteIdx(-1);
    }

    const deleteTaskList = () => {
        deleteList(deleteIdx);
        setDeleteModalOpen(false);
    };

    const openDeleteModal = (id: number) => {
        setDeleteModalOpen(true);
        setDeleteIdx(id);
    }

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center pt-12">
            {addModalOpen && (
                <AddListModal onClose={closeAddModal} addTask={addTask}></AddListModal>
            )}

            {deleteModalOpen && (
                <DeleteListModal onCancel={closeDeleteModal} onConfirm={deleteTaskList} listName={getList(deleteIdx)}></DeleteListModal>
            )}

            <h1 className="text-2xl font-bold mb-10">Losowanie zadań</h1>

            <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setAddModalOpen(true)}>Dodaj nową listę zadań</button>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50 border-b">
                            <th className="px-6 py-4">
                                Nazwa
                            </th>
                            <th className="px-6 py-4">
                                Ilość zadań
                            </th>
                            <th className="px-6 py-4 hidden md:block">
                                Zrobionych
                            </th>
                            <th className="px-6 py-4">
                                Akcje
                            </th>
                        </tr>
                        {getTableData().map((value, idx) => (
                            <tr className="odd:bg-white even:bg-gray-50 border-b" key={idx}>
                                <td className="px-6 py-4">
                                    <Link href={`/losowanie/lista/${value.id}`} className="text-blue-500">
                                        {value.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    {value.numTasks}
                                </td>
                                <td className="px-6 py-4 hidden md:block">
                                    {value.done}/{value.numTasks} ({Math.floor(value.done / value.numTasks * 100)}%)
                                </td>
                                <td className="px-6 py-4">
                                    {/* <button className="text-blue-500 mr-2">
                                        Edytuj
                                    </button> */}
                                    <button className="text-red-500" onClick={() => openDeleteModal(value.id)}>
                                        Usuń
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
