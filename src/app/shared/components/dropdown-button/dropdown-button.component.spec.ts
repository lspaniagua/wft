import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownButtonComponent } from './dropdown-button.component';

describe('DropdownButtonComponent', () => {
  let component: DropdownButtonComponent;
  let fixture: ComponentFixture<DropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the dropdown content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.show')).toBeFalsy();
  });

  it('should render the dropdown content', () => {
    component.open();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.show')).toBeTruthy();
  });
});
