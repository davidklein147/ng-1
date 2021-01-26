import { TestBed } from '@angular/core/testing';

import { BussTataService } from './buss-tata.service';

describe('BussTataService', () => {
  let service: BussTataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussTataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
