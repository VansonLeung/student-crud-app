import { useState, useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {

    const handlerRef = useRef(null);
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        if (handlerRef.value) {
            clearTimeout(handlerRef.value);
        }

        handlerRef.value = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timeout
        return () => {
            clearTimeout(handlerRef.value);
        };
    }, [value, delay]);


    const applyDebouncedValue = () => {
        if (handlerRef.value) {
            clearTimeout(handlerRef.value);
        }

        setDebouncedValue(value);
    }


    return [debouncedValue, applyDebouncedValue];
};
