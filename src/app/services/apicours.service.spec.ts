import { TestBed } from '@angular/core/testing';

import { ApicoursService } from './apicours.service';

describe('ApicoursService', () => {
  let service: ApicoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
