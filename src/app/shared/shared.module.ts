import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemLargeComponent } from './components/item-large/item-large.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NumberToArrayPipe } from './pipes/number-to-array/number-to-array.pipe';
import { ItemSmallComponent } from './components/item-small/item-small.component';
import { ModalComponent } from './components/modal/modal.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { FilterViewComponent } from './components/filter-view/filter-view.component';
import { IsFavoritePipe } from './pipes/is-favorite/is-favorite.pipe';
import { FilterByAttributePipe } from './pipes/filter-by-attribute/filter-by-attribute.pipe';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemLargeComponent,
    PaginatorComponent,
    NumberToArrayPipe,
    ItemSmallComponent,
    ModalComponent,
    DropdownButtonComponent,
    FilterViewComponent,
    IsFavoritePipe,
    FilterByAttributePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemsListComponent,
    ItemLargeComponent,
    PaginatorComponent,
    NumberToArrayPipe,
    ItemSmallComponent,
    ModalComponent,
    DropdownButtonComponent,
    FilterViewComponent,
    IsFavoritePipe,
    FilterByAttributePipe
  ]
})
export class SharedModule { }
