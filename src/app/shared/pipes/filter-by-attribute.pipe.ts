import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../interfaces/filter';
import { Item } from '../interfaces/items';

@Pipe({
  name: 'filterByAttribute'
})
export class FilterByAttributePipe implements PipeTransform {

  transform(items: Item[], filter: Filter): Item[] {
    if (!filter) {
      return items;
    }
    return items.filter((item: Item) => {
      const { attribute, value } = filter;
      return item[attribute].includes(value);
    });
  }

}
