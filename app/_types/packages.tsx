import { Product } from "./product";

export type Package = {
    id : string;
    title : string;
    slug : string;
    category : string;
    description : string;
    price : number;
    image : string;
    products : Product[];
    created_at : string;
    updated_at : string;
}

export interface PackageResponse {
    code : number | undefined;
    status : string | undefined;
    data : Package[]
}

export interface PackageDetailResponse {
    code : number | undefined;
    status : string | undefined;
    data : Package | null
}