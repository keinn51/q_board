import { AuthStorageType, LoginType } from "@globalObj/types";

const AUTH = 'auth';
const expireDays = 3;

export function saveAuth(token: LoginType) {
    localStorage.setItem(AUTH, JSON.stringify({...token, expire:  Date.now() + expireDays * 24 * 60 * 60 * 1000}));
}

export function getAuth(): AuthStorageType | null {
    if (localStorage.getItem(AUTH))
        return JSON.parse(localStorage.getItem(AUTH) as string);
    else
        return null;
}

export function clearAuth() {
    localStorage.clear();
}
