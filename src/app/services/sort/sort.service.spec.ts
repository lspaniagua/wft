import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';
import itemsResponse from '../../../assets/mock-items.json'
import { Item } from '../../interfaces/items';

describe('SortService', () => {
  let service: SortService;
  let items: Item[];
  let itemMinPrice: Item;
  let itemMaxPrice: Item;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
    items = itemsResponse.items;
    itemMinPrice = items[1];
    itemMaxPrice = items[4];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort by price', () => {
    service.setSort('price', 'asc');
    expect(service.sortBy([...items])[0].price).toEqual(itemMinPrice.price);
  });
});
