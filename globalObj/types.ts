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

export interface ReviewPostingFileType {
    id: number;
    file: Blob;
    type: string;
  }
  
  export interface ReviewPostingUrlType {
    id: number;
    url: string;
    type: string;
  }
  