import { TestBed } from '@angular/core/testing';

import { SupporterService } from './supporter.service';

describe('SupporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupporterService = TestBed.get(SupporterService);
    expect(service).toBeTruthy();
  });
});
