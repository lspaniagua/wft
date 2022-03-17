import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from '../../../interfaces/items';

@Component({
  selector: 'app-item-small',
  templateUrl: './item-small.component.html',
  styleUrls: ['./item-small.component.scss']
})
export class ItemSmallComponent implements OnInit {
  @Input() item: Item;

  @Output() clickEvent = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(item: Item): void {
    this.clickEvent.emit(item);
  }

}
