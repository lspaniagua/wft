import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemLargeComponent } from './components/item-large/item-large.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NumberToArrayPipe } from './pipes/number-to-array.pipe';

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemLargeComponent,
    PaginatorComponent,
    NumberToArrayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemsListComponent,
    ItemLargeComponent,
    PaginatorComponent,
    NumberToArrayPipe
  ]
})
export class SharedModule { }
