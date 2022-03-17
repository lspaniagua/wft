import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Item } from '../../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemsService {
  private items: Item[];

  public subject: BehaviorSubject<Item[]>;

  constructor() {
    this.items = [];
    this.subject = new BehaviorSubject<Item[]>(this.items);
  }

  toggle(item: Item): void {
    const index = this.items.findIndex((i) => i === item);
    if (index === -1) {
      this.items.push(item);
    } else {
      this.items.splice(index, 1);
    }
    this.subject.next(this.items);
  }

  getItems(): Observable<Item[]> {
    return this.subject.asObservable();
  }

  getRawItems(): Item[] {
    return this.items;
  }
}
