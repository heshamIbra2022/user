import { TestBed } from '@angular/core/testing';

import { ProductapiserviceService } from './productapiservice.service';

describe('ProductapiserviceService', () => {
  let service: ProductapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
