import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemsResponse } from '../../interfaces/items';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() fullItem: boolean;
  @Input() itemList: Item[];

  constructor() {
    this.fullItem = true;
    this.itemList = [];
  }

  ngOnInit(): void {
  }

  eventFav(item: Item): void {
    console.log('item seleccionado', item);
  }

}
