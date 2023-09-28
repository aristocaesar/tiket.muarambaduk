export type Page = {
    id : string;
    pages : string;
    slug : string;
    body : string;
    created_at : string;
    updated_at : string;
}

export interface PageResponse {
    code : number | undefined;
    status : string | undefined;
    data : Page | undefined
}