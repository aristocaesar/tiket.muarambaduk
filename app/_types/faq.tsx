export type Faq = {
    id : string;
    title : string;
    description : string;
    created_at : string;
    updated_at : string;
}

export interface FaqResponse {
    code : number | undefined;
    status : string | undefined;
    data : Faq[]
}