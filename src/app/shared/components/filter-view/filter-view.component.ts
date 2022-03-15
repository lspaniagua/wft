import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ItemAttributes } from '../../interfaces/items'
import { Filter, FilterInput } from '../../interfaces/filter';

@Component({
  selector: 'app-filter-view',
  templateUrl: './filter-view.component.html',
  styleUrls: ['./filter-view.component.scss']
})
export class FilterViewComponent implements OnInit {
  @Input() filterInputs: FilterInput[];

  @Output() getItems: EventEmitter<Filter[]>;
  @Output() close: EventEmitter<void>;

  public filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterInputs = [];
    this.getItems = new EventEmitter<Filter[]>();
    this.close = new EventEmitter<void>();
    this.filterForm = new FormGroup({});
  }

  ngOnInit(): void {
    const form: any = {};
    this.filterInputs.forEach(({ name, value }: FilterInput) => form[name] = [value]);
    this.filterForm = this.formBuilder.group(form);
  }

  filter(): void {
    const filters: Filter[] = [];
    const fields = this.filterForm.getRawValue();
    for (const field in fields) {
      if (fields[field]) {
       filters.push({ attribute: field as ItemAttributes, value: fields[field] });
      }
    }
    this.getItems.emit(filters);
  }

  clean(): void {
    this.filterForm.reset();
    this.filter();
  }

  hide(): void {
    this.close.emit();
  }
}
