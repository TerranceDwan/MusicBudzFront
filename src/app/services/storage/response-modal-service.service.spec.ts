import { TestBed } from '@angular/core/testing';

import { ResponseModalServiceService } from './response-modal-service.service';

describe('ResponseModalServiceService', () => {
  let service: ResponseModalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseModalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
