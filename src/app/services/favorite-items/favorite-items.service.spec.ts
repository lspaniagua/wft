import { TestBed } from '@angular/core/testing';

import { FavoriteItemsService } from './favorite-items.service';
import itemsResponse from '../../../assets/mock-items.json'
import { Item } from '../../interfaces/items';

describe('FavoriteItemsService', () => {
  let service: FavoriteItemsService;
  let items: Item[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteItemsService);
    items = itemsResponse.items;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add a favorite item', () => {
    const item = items[0];
    service.toggle(item);
    expect(service.getRawItems().length).toEqual(1);
  });

  it('remove a favorite item', () => {
    const item = items[0];
    service.toggle(item);
    service.toggle(item);
    expect(service.getRawItems().length).toEqual(0);
  });
});
