import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberToArrayPipe } from '../../pipes/number-to-array.pipe';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaginatorComponent,
        NumberToArrayPipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a lenght of 10', () => {
    component.length = 10;
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });
});