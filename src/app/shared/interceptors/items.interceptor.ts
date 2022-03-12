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

@Injectable()
export class ItemsInterceptor implements HttpInterceptor {

  constructor(private paginatorService: PaginatorService) {}

  intercept(request: HttpRequest<Items>, next: HttpHandler): Observable<HttpEvent<ItemsResponse>> {
    return next.handle(request)
      .pipe(
        map((response: HttpEvent<Items>) => {
          if (response instanceof HttpResponse) {
            return response.clone({ body: response.body ? this.buildItems(response.body) : null });
          }
          return response;
        })
      );
  }

  buildItems(body: Items): ItemsResponse {
    const items = body?.items;
    const length = items?.length;
    const pagination = this.paginatorService.paginate(length ? length : 0);
    const { index: { start, end } } = pagination;
    console.log(items, pagination);
    return { items: length ? items?.slice(start, end + 1) : [], pagination };
  }
}