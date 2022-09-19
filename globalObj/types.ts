export interface AuthStorageType {
    userId: number;
    loginId: string;
    role: number;
    expire: Date;
}

export interface LoginType {
    userId: number;
    loginId: string;
    role: number;
}