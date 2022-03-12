import { Paginator } from "./paginator";

export interface Item {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export interface Items {
    items: Item[];
}

export interface ItemsResponse {
    items: Item[];
    pagination: Paginator;
}