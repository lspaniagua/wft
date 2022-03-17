import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLargeComponent } from './item-large.component';
import itemsResponse from '../../../../assets/mock-items.json'
import { Item } from '../../../interfaces/items';

describe('ItemLargeComponent', () => {
  let component: ItemLargeComponent;
  let fixture: ComponentFixture<ItemLargeComponent>;
  let item: Item;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLargeComponent);
    item = itemsResponse.items[0]
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title of the item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(item.title);
  });
});
