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