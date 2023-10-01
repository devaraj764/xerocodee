// useCookies.ts
import { useMemo } from 'react';
import Cookies from 'universal-cookie';

// Define your custom cookie keys and their types
interface MyCookies {
    token?: string;
}

export function useCookies(): [MyCookies, (name: string, value: string) => void, (name: string) => void] {
    const cookies = useMemo(() => new Cookies(), []);

    const setCookie = (name: string, value: string) => {
        cookies.set(name, value, { path: '/' });
    };

    const removeCookie = (name: string) => {
        cookies.remove(name, { path: '/' });
    };

    return [cookies.getAll(), setCookie, removeCookie];
}
