"use client";

import AddListModal from "@/components/modals/AddListModal";
import useRandomTask from "@/hooks/useRandomTask";
import Link from "next/link";
import { useState } from "react";

export default function GeneratorPage() {
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [getTableData, addTask] = useRandomTask();

    const closeModal = () => {
        setAddModalOpen(false);
    };

    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center pt-12">
            {addModalOpen && (
                <AddListModal onClose={closeModal} addTask={addTask}></AddListModal>
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
                            <tr className="odd:bg-white even:bg-gray-50 border-b">
                                <td className="px-6 py-4">
                                    <Link href={"/"} className="text-blue-500">
                                        {value.name}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    {value.numTasks}
                                </td>
                                <td className="px-6 py-4 hidden md:block">
                                    35/160 (22%) TODO
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-500 mr-2">
                                        Edytuj
                                    </button>
                                    <button className="text-red-500">
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
