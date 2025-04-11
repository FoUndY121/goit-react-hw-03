import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const getInitialValue = () => {
        try {
            const saved = localStorage.getItem(key);
            if (saved) {
                return JSON.parse(saved);
            }

            // Если нет сохранённого значения, использовать дефолт
            if (typeof defaultValue === 'function') {
                return defaultValue();
            }

            return defaultValue;
        } catch (error) {
            console.log(error);
            return defaultValue;
        }
    };

    const [value, setValue] = useState(getInitialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};