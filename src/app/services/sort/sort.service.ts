import { Injectable } from '@angular/core';

import { Item, ItemAttributes } from '../../interfaces/items';
import { Sort, SortType } from '../../interfaces/sort';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private sort: Sort;

  constructor() {}

  setSort(attribute: ItemAttributes, type: SortType): void {
    this.sort = { attribute, type };
  }

  sortBy(items: Item[]): Item[] {
    if (this.sort) {
      const { attribute, type } = this.sort;
      if (attribute === 'price') {
        let compareFunction = type === 'asc'
          ? ({ price: a }: Item, { price: b }: Item) => +a - +b
          : ({ price: a }: Item, { price: b }: Item) => +b - +a;
        items.sort(compareFunction);
      } else {
        const c = type === 'asc' ? 1 : -1;
        items.sort((a: Item, b: Item) => a[attribute].localeCompare(b[attribute]) * c);
      }
    }
    return items;
  }
}
