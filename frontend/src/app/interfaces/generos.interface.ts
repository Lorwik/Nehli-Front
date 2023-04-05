export interface Generos {
    request_hash:         string;
    request_cached:       boolean;
    request_cache_expiry: number;
    mal_url:              MalURL;
    item_count:           number;
    anime:                Animu[];
}

export interface Animu {
    mal_id:       number;
    url:          string;
    title:        string;
    image_url:    string;
    synopsis:     string;
    type:         AnimeType;
    airing_start: Date;
    episodes:     number | null;
    members:      number;
    genres:       MalURL[];
    source:       Source;
    producers:    MalURL[];
    score:        number;
    licensors:    string[];
    r18:          boolean;
    kids:         boolean;
}

export interface MalURL {
    mal_id: number;
    type:   MalURLType;
    name:   string;
    url:    string;
}

export enum MalURLType {
    Anime = "anime",
}

export enum Source {
    CardGame = "Card game",
    Game = "Game",
    LightNovel = "Light novel",
    Manga = "Manga",
    Novel = "Novel",
    Original = "Original",
    Other = "Other",
    VisualNovel = "Visual novel",
    WebManga = "Web manga",
}

export enum AnimeType {
    Movie = "Movie",
    Ova = "OVA",
    Tv = "TV",
}
