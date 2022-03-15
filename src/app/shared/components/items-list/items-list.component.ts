import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../interfaces/items';
import { FavoriteItemsService } from '../../services/favorite-items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() isViewLarge: boolean = true;
  @Input() itemList: Item[];

  constructor(private favoriteItemsService: FavoriteItemsService) {
    this.itemList = [];
  }

  ngOnInit(): void {
  }

  toggleFavorites(item: Item): void {
    this.favoriteItemsService.toggle(item);
  }
}
