const AUTH = 'auth';
const expireDays = 3;

export function saveAuth(token: { userId: number; loginId: string; role: number }) {
    localStorage.setItem(AUTH, JSON.stringify({...token, expire:  Date.now() + expireDays * 24 * 60 * 60 * 1000}));
}

export function getAuth(): { userId: number; loginId: string; role: number; expire: Date } | null {
    if (localStorage.getItem(AUTH))
        return JSON.parse(localStorage.getItem(AUTH) as string);
    else
        return null;
}