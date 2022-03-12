export interface Paginator {
    page: Page;
    pages: number[];
    totalItems: number;
    index: Index;
}

export interface Page {
    current: number;
    size: number;
    total: number;
    start: number;
    end: number;
}

export interface Index {
    start: number;
    end: number;
}