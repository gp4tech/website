import { TestBed } from '@angular/core/testing';

import { GetInvolvedService } from './get-involved.service';

describe('GetInvolvedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetInvolvedService = TestBed.get(GetInvolvedService);
    expect(service).toBeTruthy();
  });
});
