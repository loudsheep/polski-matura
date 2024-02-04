"use client"

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturnType<T> {
    let storedValue: any = "";
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(initial);

    useEffect(() => {
        storedValue = localStorage.getItem(key);
        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;