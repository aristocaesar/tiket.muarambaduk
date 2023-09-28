export type Ticket = {
    id : string;
    title : string;
    category : string;
    normal_day : number;
    weekend_day : number;
    created_at : string;
    updated_at : string;
}

export interface TicketResponse {
    code : number | undefined;
    status : string | undefined;
    data : Ticket[]
}