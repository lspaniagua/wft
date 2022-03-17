import { ItemAttributes } from "./items";

export interface Filter {
    attribute: ItemAttributes;
    value: string;
}

export interface FilterInput {
    name: string;
    description: string;
    value: string;
}
