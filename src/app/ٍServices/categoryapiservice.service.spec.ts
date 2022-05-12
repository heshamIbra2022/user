import { TestBed } from '@angular/core/testing';

import { CategoryapiserviceService } from './categoryapiservice.service';

describe('CategoryapiserviceService', () => {
  let service: CategoryapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
