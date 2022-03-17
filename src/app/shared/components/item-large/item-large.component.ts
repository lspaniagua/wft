import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../../../interfaces/items';

@Component({
  selector: 'app-item-large',
  templateUrl: './item-large.component.html',
  styleUrls: ['./item-large.component.scss']
})
export class ItemLargeComponent implements OnInit {
  @Input() item: Item;
  @Input() favorite: boolean;

  @Output() clickEvent: EventEmitter<Item>;

  constructor() {
    this.favorite = false;
    this.clickEvent = new EventEmitter<Item>();
  }

  ngOnInit(): void {
  }

  favEvent(item: Item): void {
    this.favorite = !this.favorite;
    this.clickEvent.emit(item);
  }

}
