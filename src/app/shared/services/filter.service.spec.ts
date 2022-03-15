import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import itemResponse from '../../../assets/mock-items.json'
import { Item } from '../interfaces/items';

describe('FilterService', () => {
  let service: FilterService;
  let items: Item[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
    items = itemResponse.items;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter by title', () => {
    service.setFilter('title', '6');
    expect(service.filterBy(items).length).toEqual(2);
  });

  it('should filter by price', () => {
    service.setFilter('price', '50');
    expect(service.filterBy(items).length).toEqual(1);
  });
});
