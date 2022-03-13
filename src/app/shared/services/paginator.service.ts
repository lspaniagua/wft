import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  private currentPage: number;
  private pageSize: number;
  private maxPages: number;

  constructor() {
    this.currentPage = 1;
    this.pageSize = 5;
    this.maxPages = 10;
  }

  paginate(totalItems: number) {
    let totalPages = Math.ceil(totalItems / this.pageSize);

    // ensure current page isn't out of range
    if (this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= this.maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
        if (this.currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = this.maxPages;
        } else if (this.currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - this.maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = this.currentPage - maxPagesBeforeCurrentPage;
            endPage = this.currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = Math.min(startIndex + this.pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      page: {
        current: this.currentPage,
        size: this.pageSize,
        total: totalPages,
        start: startPage,
        end: endPage
      },
      totalItems: totalItems,
      index: {
        start: startIndex,
        end: endIndex
      },
      pages: pages
    };
  }

  nextPage(): void {
    this.currentPage++;
  }

  previousPage(): void {
    this.currentPage--;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }
}