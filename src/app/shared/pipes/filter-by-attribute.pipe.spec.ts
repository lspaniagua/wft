import { FilterByAttributePipe } from './filter-by-attribute.pipe';

import itemsResponse from '../../../assets/mock-items.json'

describe('FilterByAttributePipe', () => {
  let pipe: FilterByAttributePipe;

  beforeEach(() => {
    pipe = new FilterByAttributePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter items that includes "6" in the title', () => {
    expect(pipe.transform(itemsResponse.items, { attribute: 'title', value: '6' }).length).toEqual(2);
  });
});
