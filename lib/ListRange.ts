import { TaskRange } from "@/types/Tasks";

export default class ListRange {
    private ranges: TaskRange[] = [];

    private validateRange(index: number) {
        let range = this.ranges[index];
        range.tasks = [];
        let regex = /^[A-Z\d]+(?:\.[A-Z\d]+)*$/;

        if (range.start == null || range.end == null) return false;
        if (!regex.test(range.start) || !regex.test(range.end)) return false;

        let r1 = range.start.split(".");
        let r2 = range.end.split(".");

        if (r1.length != r2.length) return false;

        let r1Last = Number.parseInt(r1[r1.length - 1]);
        let r2Last = Number.parseInt(r2[r2.length - 1]);

        if (r1Last > r2Last) return false;

        let start = "";
        for (let i = 0; i < r1.length - 1; i++) {
            start += r1[i] + ".";
        }

        for (let i = r1Last; i <= r2Last; i++) {
            range.tasks.push({
                number: start + i,
            });
        }

        console.log(this.ranges);
        return true;
    }

    public addRange(start: string | null, end: string | null) {
        this.ranges.push({
            start,
            end,
            isValid: false,
            tasks: [],
        });

        this.ranges[this.ranges.length - 1].isValid = this.validateRange(this.ranges.length - 1);

        return this;
    }

    public editRange(index: number, type: "start" | "end", value: string) {
        if (type == "start") this.ranges[index].start = value;
        else this.ranges[index].end = value;

        this.ranges[index].isValid = this.validateRange(index);

        return this;
    }

    public deleteRange(index: number) {
        if (index >= 0 && index < this.ranges.length) {
            this.ranges.splice(index, 1);
        }
        return this;
    }

    public getByIndex(index: number) {
        if (index < 0 || index >= this.ranges.length) {
            return null;
        }
        return this.ranges[index];
    }

    public renderFields() {
        if (this.ranges.length == 0) return [0];

        // check if last range has bot start and end set
        let last = this.ranges[this.ranges.length - 1];
        if (last.isValid) {
            return Array(this.ranges.length + 1).fill(0);
        }
        return Array(this.ranges.length).fill(0);
    }

    public length() {
        return this.ranges.length;
    }

    public validForSave() {
        for (const range of this.ranges) {
            if (!range.isValid) return false;
        }
        return true;
    }

    public getRanges(): TaskRange[] {
        return this.ranges;
    }
}