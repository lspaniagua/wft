import { Component, OnInit } from '@angular/core';
import { ItemsResponse } from 'src/app/shared/interfaces/items';
import { ItemsService } from 'src/app/shared/services/items.service';
import { PaginatorService } from 'src/app/shared/services/paginator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public itemsResponse: ItemsResponse;

  constructor(private itemsService: ItemsService, private paginatorService: PaginatorService) { }

  ngOnInit(): void {
    this.getItems();
  }

  paginate(page: number) {
    console.log(page);
    this.paginatorService.goToPage(page);
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems().subscribe((response: ItemsResponse) => {
      this.itemsResponse = response;
      console.log(this.itemsResponse.pagination.page)
    });
  }

}
