import { Pipe, PipeTransform } from '@angular/core';

import { Item } from '../../../interfaces/items';
import { FavoriteItemsService } from '../../../services/favorite-items/favorite-items.service';

@Pipe({
  name: 'isFavorite'
})
export class IsFavoritePipe implements PipeTransform {

  constructor(private favoriteItemsService: FavoriteItemsService) {}

  transform(value: Item): boolean {
    return this.favoriteItemsService.getRawItems()
      .some((item: Item) => item.title === value.title);
  }

}
