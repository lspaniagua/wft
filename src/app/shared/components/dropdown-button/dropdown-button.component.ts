import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

import { ItemAttributes } from '../../interfaces/items';
import { Sort, SortType } from '../../interfaces/sort';
import { PaginatorService } from '../../services/paginator.service';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss']
})
export class DropdownButtonComponent implements OnInit {
  @Output() clickEvent: EventEmitter<Sort>;

  private itemAttribute: ItemAttributes;
  private sortType: SortType;

  constructor(private el: ElementRef, private paginatorService: PaginatorService) {
    this.clickEvent = new EventEmitter<Sort>();
  }

  ngOnInit(): void {
    document.addEventListener('click', (e: any) => {
      if (!e.target.matches('.dropbtn')) {
        this.close();
      } 
    });
  }

  open(): void {
    document.getElementById('myDropdown')?.classList.toggle("show");
  }

  close(): void {
    document.getElementById('myDropdown')?.classList.remove('show');
  }

  event(attribute: ItemAttributes, type?: SortType): void {
    if (!type) {
      if (this.itemAttribute === attribute) {
        this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
      } else {
        this.paginatorService.goToPage(1);
        this.sortType = 'asc';
      }
    } else {
      this.sortType = type;
    }
    this.itemAttribute = attribute;
    this.clickEvent.emit({ attribute: this.itemAttribute, type: this.sortType });
  }
}
