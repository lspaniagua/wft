import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ItemsResponse } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getItems(): Observable<ItemsResponse> {
    return this.http.get<ItemsResponse>(this.url, {});
  }
}