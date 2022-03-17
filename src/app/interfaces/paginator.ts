export interface Paginator {
    page: Page;
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