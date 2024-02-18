"use client"

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturnType<T> {
    const [value, setValue] = useState<T>(initialValue);
    const [windowLoaded, setWindowLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (!windowLoaded) {
            try {
                let storedValue = localStorage.getItem(key);
                let initial = storedValue ? JSON.parse(storedValue) : initialValue;
                setValue(initial);
                setWindowLoaded(true);
            } catch (e) {
                setValue([] as any);
                setWindowLoaded(true);
            }
        } else {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
            }
        }

    }, [value]);

    return [value, setValue];
}

export default useLocalStorage;