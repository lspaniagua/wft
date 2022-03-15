import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Filter, FilterInput } from 'src/app/shared/interfaces/filter';
import { Item, ItemsResponse } from 'src/app/shared/interfaces/items';
import { Sort } from 'src/app/shared/interfaces/sort';
import { FavoriteItemsService } from 'src/app/shared/services/favorite-items.service';
import { FilterService } from 'src/app/shared/services/filter.service';
import { ItemsService } from 'src/app/shared/services/items.service';
import { PaginatorService } from 'src/app/shared/services/paginator.service';
import { SortService } from 'src/app/shared/services/sort.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('favModal', { static: false }) favModal: ModalComponent;

  public itemsResponse: ItemsResponse;
  public favoriteItems: Item[];
  public favoriteItemsFilter: Filter;
  public showFilter: boolean;
  public filterInputs: FilterInput[];
  public filterFavoriteInputs: FilterInput[];

  private subscription: Subscription;

  constructor(
    private itemsService: ItemsService,
    private paginatorService: PaginatorService,
    private favoriteItemsService: FavoriteItemsService,
    private sortService: SortService,
    private filterService: FilterService
  ) {
    this.showFilter = false;
    this.filterInputs = [
      { name: 'title', description: 'Titulo', value:'' },
      { name: 'description', description: 'Descripción', value:'' },
      { name: 'price', description: 'Precio', value:'' },
      { name: 'email', description: 'Correo', value:'' }
    ];
    this.filterFavoriteInputs = [
      { name: 'title', description: 'Titulo', value:'' }
    ];
  }

  ngOnInit(): void {
    this.subscription = this.favoriteItemsService.getItems().subscribe((response: Item[]) => {
      this.favoriteItems = response;
    });
    this.getItems();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  paginate(page: number) {
    this.paginatorService.goToPage(page);
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems().subscribe((response: ItemsResponse) => {
      this.itemsResponse = response;
    });
  }

  openModal(): void {
    this.favModal.open();
  }

  openFilter(): void {
    this.showFilter = !this.showFilter;
  }

  setSort({ attribute, type }: Sort): void {
    this.sortService.setSort(attribute, type);
    this.getItems();
  }

  setFilter({ attribute, value }: Filter): void {
    this.filterService.setFilter(attribute, value);
    this.getItems();
  }

  getFilteredItems(filters: Filter[]) {
    this.closeFilters();
    this.filterInputs.forEach((input: FilterInput) => input.value = '');
    this.filterService.cleam();
    filters.forEach(({ attribute, value }) => {
      this.filterInputs.forEach((input: FilterInput) => {
        if (input.name === attribute) {
          input.value = value;
        }
      });
      this.filterService.setFilter(attribute, value);
    });
    this.paginatorService.goToPage(1);
    this.getItems();
  }

  closeFilters(): void {
    this.showFilter = false;
  }

  setFavoriteItemsFilter(filters: Filter[]) {
    if (filters.length > 0) {
      this.favoriteItemsFilter = filters[0];
    }
  }
}
