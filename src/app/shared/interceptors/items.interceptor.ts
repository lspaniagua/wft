import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Items, ItemsResponse } from '../interfaces/items';
import { PaginatorService } from '../services/paginator.service';
import { SortService } from '../services/sort.service';
import { FilterService } from '../services/filter.service';

@Injectable()
export class ItemsInterceptor implements HttpInterceptor {

  constructor(
    private sortService: SortService,
    private filterService: FilterService,
    private paginatorService: PaginatorService
  ) {}

  intercept(request: HttpRequest<Items>, next: HttpHandler): Observable<HttpEvent<ItemsResponse>> {
    return next.handle(request)
      .pipe(
        map((response: HttpEvent<Items>) => {
          if (response instanceof HttpResponse) {
            const { body } = response;
            return response.clone({ body: body ? this.buildItems(body) : null });
          }
          return response;
        })
      );
  }

  buildItems({ items }: Items): ItemsResponse {
    const sortedItems = this.sortService.sortBy(items);
    const filteredItems = this.filterService.filterBy(sortedItems);
    const pagination = this.paginatorService.paginate(filteredItems.length);
    const { index: { start, end } } = pagination;
    const pagedItems = filteredItems.slice(start, end + 1);
    return { items: pagedItems, pagination };
  }
}