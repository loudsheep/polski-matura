import useLocalStorage from "./useLocalstorage";

type NoteObject = {
    lekturaIdx: number,
    opracowanieIdx: number,
    content: string,
};

type UseNotesReturnType = [(lektura: number, opracowanie: number) => string,
    (lektura: number, opracowanie: number, notes: string) => void,
    (lektura: number, opracowanie: number) => boolean,
    (lektura: number, lektruaLength: number) => number];

function useNotes(key: string): UseNotesReturnType {
    const [notesStorage, setNotesStorage] = useLocalStorage<NoteObject[]>(key, []);

    const getNote = (lektura: number, opracowanie: number) => {
        for (const elem of notesStorage) {
            if (elem.lekturaIdx == lektura && elem.opracowanieIdx == opracowanie && elem.content != "") {
                return elem;
            }
        }
        return null;
    }

    const getNotes = (lektura: number, opracowanie: number): string => {
        return getNote(lektura, opracowanie)?.content ?? "";
    };

    const setNotes = (lektura: number, opracowanie: number, notes: string) => {
        let note = getNote(lektura, opracowanie);
        if (note) {
            let tmp = JSON.parse(JSON.stringify(notesStorage));

            for (const elem of tmp) {
                if (elem.lekturaIdx == lektura && elem.opracowanieIdx == opracowanie) {
                    if (notes == "") {
                        tmp.splice(tmp.indexOf(elem), 1);
                    } else {
                        elem.content = notes;
                    }
                    break
                }
            }

            setNotesStorage(tmp);
        } else {
            setNotesStorage([...notesStorage, {
                lekturaIdx: lektura,
                opracowanieIdx: opracowanie,
                content: notes,
            }]);
        }
    };

    const hasNotes = (lektura: number, opracowanie: number): boolean => {
        return getNote(lektura, opracowanie) != null;
    };

    const lekturaHasNotes = (lektura: number, lektruaLength: number): number => {
        let count = 0;
        for (const elem of notesStorage) {
            if (elem.lekturaIdx == lektura && elem.content != "") {
                count++;
            }
        }

        // 0 if no matches, 1 if some opracowania has notes, 2 if all opracowania in lektura has notes
        if (count == 0) return 0;
        return count == lektruaLength ? 2 : 1;
    }

    return [getNotes, setNotes, hasNotes, lekturaHasNotes];
}

export default useNotes;