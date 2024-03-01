"use client";

import useLocalStorage from "./useLocalstorage";
import { TaskRange, TasksObject } from "@/types/Tasks";


type UseRandomTaskReturnType = [() => { id: number, name: string, numTasks: number, done: number }[],
    (name: string, list: TaskRange[]) => void,
    (id: number) => TasksObject | null,
    (id: number) => { id: number, name: string, numTasks: number, done: number } | null,
    (id: number, rangeIdx: number, taskIdx: string, newStatus: "done" | "to_revision" | "too_hard") => void,
    (id: number) => boolean,
    (id: number) => { number: string, status?: "done" | "to_revision" | "too_hard" | undefined }[]];

function useRandomTask(key: string = "losowe_zadania"): UseRandomTaskReturnType {
    const [taskStorage, setTaskStorage] = useLocalStorage<TasksObject[]>(key, []);

    const addTaskList = (name: string, list: TaskRange[]) => {
        let tmp = JSON.parse(JSON.stringify(taskStorage));
        tmp.push({
            id: Math.round(Math.random() * 1_000_000_000_000),
            name: name,
            ranges: list,
        });
        setTaskStorage(tmp);
    }

    const getListDataForTable = () => {
        let result = [];
        for (const task of taskStorage) {
            let numTasks = 0;
            let done = 0
            for (const range of task.ranges) {
                numTasks += range.tasks.length;
                for (const elem of range.tasks) {
                    if (elem.status == "done") done++;
                }
            }

            result.push({
                id: task.id,
                name: task.name,
                numTasks: numTasks,
                done: done,
            });
        }

        return result;
    };

    const getList = (id: number) => {
        for (const task of taskStorage) {
            if (task.id == id) return task;
        }
        return null;
    };

    const getListDetails = (id: number) => {
        let task = getList(id);
        if (task == null) return null;

        let numTasks = 0;
        let done = 0
        for (const range of task.ranges) {
            numTasks += range.tasks.length;
            for (const elem of range.tasks) {
                if (elem.status == "done") done++;
            }
        }

        return {
            id: task.id,
            name: task.name,
            numTasks: numTasks,
            done: done,
        };
    };

    const editStatus = (id: number, rangeIdx: number, taskIdx: string, newStatus: "done" | "to_revision" | "too_hard") => {
        let tmp = JSON.parse(JSON.stringify(taskStorage));

        for (const object of tmp) {
            if (object.id == id) {

                for (const task of object.ranges[rangeIdx].tasks) {
                    if (task.number == taskIdx) {
                        task.status = newStatus;
                        // object.ranges[rangeIdx].tasks[taskIdx].status = newStatus;
                        break;
                    }
                }

                setTaskStorage(tmp);
                return;
            }
        }
    };

    const deleteList = (id: number) => {
        let tmp = JSON.parse(JSON.stringify(taskStorage));
        for (let i = 0; i < tmp.length; i++) {
            const element = tmp[i];
            if (element.id == id) {
                tmp.splice(i, 1);
                setTaskStorage(tmp);
                return true;
            }
        }
        return false;
    };

    const getListNotDoneTasks = (id: number) => {
        let list = getList(id);
        if (!list) return [];

        let result = [];
        for (const range of list.ranges) {
            for (const elem of range.tasks) {
                if (elem.status != "done") result.push(elem);
            }
        }

        return result;
    };

    return [getListDataForTable, addTaskList, getList, getListDetails, editStatus, deleteList, getListNotDoneTasks];
}

export default useRandomTask;