import { Injectable } from '@angular/core';

import { Filter } from '../../interfaces/filter';
import { Item, ItemAttributes } from '../../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters: Filter[];

  constructor() {
    this.cleam();
  }

  setFilter(attribute: ItemAttributes, value: string): void {
    this.filters.push({ attribute, value });
  }

  cleam(): void {
    this.filters = [];
  }

  filterBy(items: Item[]): Item[] {
    return this.filters.reduce((a, filter) => {
      const { attribute, value } = filter;
      let callback = attribute !== 'price'
        ? (item: Item) => item[attribute].includes(value)
        : (item: Item) => item[attribute] === value;
      return a.filter(callback);
    }, items);
  }
}
