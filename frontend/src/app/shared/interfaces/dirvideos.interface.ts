export interface DirVideos {
    dir:  Dir[];
    tipo: string;
}

export interface Dir {
    directorio: string;
    video:      string[];
    miniatura:  null | string;
}