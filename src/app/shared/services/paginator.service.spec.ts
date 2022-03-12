import { TestBed } from '@angular/core/testing';

import { PaginatorService } from './paginator.service';

describe('PaginatorService', () => {
  let service: PaginatorService;
  let length: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorService);
    length = 20;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be in the page 1', () => {
    expect(service.paginate(length).page.current).toEqual(1);
  });

  it('should be in the next page', () => {
    service.nextPage();
    expect(service.paginate(length).page.current).toBeGreaterThan(1);
  });

  it('should be in the previous page', () => {
    service.previousPage;
    expect(service.paginate(length).page.current).toEqual(1);
  });
});