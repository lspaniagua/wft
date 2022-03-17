import { Paginator } from "./paginator";

export interface Item {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
    favorite?: boolean;
}

export interface Items {
    items: Item[];
}

export interface ItemsResponse {
    items: Item[];
    pagination: Paginator;
}

export type ItemAttributes = 'title' | 'description' | 'price' | 'email';