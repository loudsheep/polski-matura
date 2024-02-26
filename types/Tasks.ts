import ListRange from "@/lib/ListRange";

export type TaskRange = {
    start: string | null,
    end: string | null,
    isValid: boolean,
    tasks: {
        number: string,
        status?: "done" | "to_revision" | "too_hard",
    }[],
};

export type TasksObject = {
    id: number,
    name: string,
    ranges: TaskRange[],
};