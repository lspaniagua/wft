import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FilterInput } from '../../../interfaces/filter';
import { SharedModule } from '../../shared.module';

import { FilterViewComponent } from './filter-view.component';

describe('FilterViewComponent', () => {
  let component: FilterViewComponent;
  let fixture: ComponentFixture<FilterViewComponent>;
  let filterInputs: FilterInput[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterViewComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterViewComponent);
    component = fixture.componentInstance;
    filterInputs = [
      { name: 'title', description: 'Titulo', value:'' }
    ];
    component.filterInputs = filterInputs;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should a input to filter by title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label')?.textContent).toContain(filterInputs[0].description);
  });
});
