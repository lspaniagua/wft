import { ItemAttributes } from "./items";

export interface Sort {
    attribute: ItemAttributes;
    type: SortType;
}

export type SortType = 'asc' | 'desc';
