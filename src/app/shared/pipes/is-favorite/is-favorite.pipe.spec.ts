import { FavoriteItemsService } from '../../../services/favorite-items/favorite-items.service';
import { IsFavoritePipe } from './is-favorite.pipe';
import itemsResponse from '../../../../assets/mock-items.json'
import { Item } from '../../../interfaces/items';

describe('IsFavoritePipe', () => {
  let service: FavoriteItemsService;
  let pipe: IsFavoritePipe;
  let item: Item;

  beforeEach(() => {
    service = new FavoriteItemsService();
    pipe = new IsFavoritePipe(service);
    item = itemsResponse.items[0];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be not a favorite item', () => {
    expect(pipe.transform(item)).toBeFalse();
  });

  it('should be a favorite item', () => {
    service.toggle(item);
    expect(pipe.transform(item)).toBeTrue();
  });
});
