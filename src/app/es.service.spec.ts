import { TestBed } from '@angular/core/testing';

import { EsService } from './es.service';

describe('EsService', () => {
  let service: EsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
