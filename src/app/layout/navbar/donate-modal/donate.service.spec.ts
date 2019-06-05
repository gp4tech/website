import { TestBed } from '@angular/core/testing';

import { DonateService } from './donate.service';

describe('DonateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonateService = TestBed.get(DonateService);
    expect(service).toBeTruthy();
  });
});
