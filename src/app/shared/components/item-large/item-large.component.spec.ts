import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLargeComponent } from './item-large.component';

describe('ItemLargeComponent', () => {
  let component: ItemLargeComponent;
  let fixture: ComponentFixture<ItemLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
