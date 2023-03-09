import { TestBed } from '@angular/core/testing';

import { ConsumProductService } from './consum-product.service';

describe('ConsumProductService', () => {
  let service: ConsumProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
