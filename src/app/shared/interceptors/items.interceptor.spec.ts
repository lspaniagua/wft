import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { environment } from 'src/environments/environment';
import { Items } from '../interfaces/items';
import { ItemsInterceptor } from './items.interceptor';
import expectedItemsResponse from '../../../assets/mock-items.json'

describe('ItemsInterceptor', () => {

  let interceptor: ItemsInterceptor;
  let http: HttpClient;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsInterceptor
      ],
      imports: [
        HttpClientModule
      ],
    });
    interceptor = TestBed.inject(ItemsInterceptor);
    http = TestBed.inject(HttpClient);
    url = environment.url;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should get an ItemsResponse Object', (done: DoneFn) => {
    http.get<Items>(url).subscribe({
      next: (itemsResponse: Items) => {
        expect(interceptor.buildItems(itemsResponse))
          .withContext('expected Items Response')
          .toEqual(expectedItemsResponse);
        done();
      },
      error: done.fail
    });
  });

  it('should get only 5 items', (done: DoneFn) => {
    http.get<Items>(url).subscribe({
      next: (itemsResponse: Items) => {
        expect(interceptor.buildItems(itemsResponse).items.length)
          .withContext('expected 5 Items lenght')
          .toEqual(5);
        done();
      },
      error: done.fail
    });
  });
});