import { TestBed } from '@angular/core/testing';

import { NgoApiService } from './ngo-api.service';

describe('NgoApiService', () => {
  let service: NgoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
