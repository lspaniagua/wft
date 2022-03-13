import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() selected: number;

  @Output() paginate: EventEmitter<number>;

  constructor() {
    this.length = 0;
    this.selected = 0;
    this.paginate = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  goToPage(page: number): void {
    this.paginate.emit(page);
  }

  goToPreviousPage() {
    if (--this.selected < 1) {
      this.selected = 1;
    }
    this.goToPage(this.selected);
  }

  goToNextPage() {
    if (++this.selected > this.length) {
      this.selected = this.length;
    }
    this.goToPage(this.selected);
  }

}
