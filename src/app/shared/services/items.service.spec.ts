import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ItemsInterceptor } from '../interceptors/items.interceptor';
import { ItemsService } from './items.service';
import expectedItemsResponse from '../../../assets/mock-items.json'

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ItemsInterceptor,
        multi: true
      }],
    });
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an ItemsResponse Object', (done: DoneFn) => {
    service.getItems().subscribe({
      next: itemsResponse => {
        expect(itemsResponse)
          .withContext('expected Items Response')
          .toEqual(expectedItemsResponse);
        done();
      },
      error: done.fail
    });
  });

  it('should get only 5 items', (done: DoneFn) => {
    service.getItems().subscribe({
      next: itemsResponse => {
        expect(itemsResponse.items.length)
          .withContext('expected 5 Items lenght')
          .toEqual(5);
        done();
      },
      error: done.fail
    });
  });
});