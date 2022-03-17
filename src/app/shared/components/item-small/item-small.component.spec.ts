import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSmallComponent } from './item-small.component';
import itemsResponse from '../../../../assets/mock-items.json'
import { Item } from '../../../interfaces/items';

describe('ItemSmallComponent', () => {
  let component: ItemSmallComponent;
  let fixture: ComponentFixture<ItemSmallComponent>;
  let item: Item;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSmallComponent);
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
