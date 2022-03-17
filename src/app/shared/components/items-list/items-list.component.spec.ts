import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import itemsResponse from '../../../../assets/mock-items.json'
import { Item } from '../../../interfaces/items';
import { IsFavoritePipe } from '../../pipes/is-favorite/is-favorite.pipe';

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let items: Item[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItemsListComponent,
        IsFavoritePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    items = itemsResponse.items;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create items large', () => {
    component.itemList = items;
    component.isViewLarge = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-item-large')).toBeTruthy();
  });

  it('should create items small', () => {
    component.itemList = items;
    component.isViewLarge = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-item-small')).toBeTruthy();
  });
});
