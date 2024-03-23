"use client";

import useLocalStorage from "@/hooks/useLocalstorage";
import ShiftingCountdown from "./ShiftingCountdown";
import { useState } from "react";
import AddCustomTimerModal from "./modals/AddCustomTimerModal";

type CustomTimerType = {
    id: number,
    date: string,
    time: string,
    title: string,
};


export default function CustomTimeLeft() {
    const [timers, setTimers] = useLocalStorage<CustomTimerType[]>("custom_timers", []);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);

    const onClose = () => setShowAddModal(false);

    const addTimer = (title: string, date: string, time: string) => {
        let tmp = JSON.parse(JSON.stringify(timers));
        tmp.push({
            id: Math.round(Math.random() * 1_000_000_000_000),
            title,
            date: `${date} ${time}`,
        });
        setTimers(tmp);
        setShowAddModal(false);
        try {
            window.location.reload();
        } catch { }
    };

    const deleteTimer = (id: number) => {
        if (!confirm("Usuwasz timer. Czy na pewno?")) return;

        let tmp = JSON.parse(JSON.stringify(timers));
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].id == id) {
                tmp.splice(i, 1);
                break;
            }
        }
        setTimers(tmp);
    };

    return (
        <div>
            {showAddModal && (
                <AddCustomTimerModal onClose={onClose} addTimer={addTimer}></AddCustomTimerModal>
            )}
            <div className="mt-10 font-bold text-xl border-b mb-5 pb-4 flex justify-between items-center">
                <h2 className=''>Inne odliczanie</h2>

                <button type="button" onClick={() => setShowAddModal(true)} className="text-black border border-black hover:bg-black hover:text-white focus:outline-none font-medium rounded-full text-sm p-1 text-center inline-flex items-center">
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>
            </div>

            <div className='flex flex-wrap'>
                {/* Mapowanie egzaminów na komponenty ShiftingCountdown */}
                {timers.map((timer, index) => (
                    <>
                        {/* Check if date is in future */}
                        {new Date(timer.date).valueOf() > Date.now() && (
                            <ShiftingCountdown key={index} countdownDateTo={timer.date} title={timer.title} deleteOption={true} onDelete={() => deleteTimer(timer.id)}></ShiftingCountdown>
                        )}
                    </>
                ))}

                {timers.length == 0 && (
                    <p>Nic nie ustawione</p>
                )}
            </div>
        </div>
    )
}
