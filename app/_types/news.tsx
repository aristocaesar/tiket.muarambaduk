export type News = {
    id : string;
    title : string;
    slug : string;
    body : string;
    thumbnail : string;
    author : string;
    created_at : string;
    updated_at : string;
}

export interface NewsResponse {
    code : number | undefined;
    status : string | undefined;
    data : News[];
}

export interface NewsDetailResponse {
    code : number | undefined;
    status : string | undefined;
    data : News | null;
}