import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageReturnType<T> = [T, Dispatch<SetStateAction<T>>];

function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorageReturnType<T> {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    const [value, setValue] = useState<T>(initial);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;