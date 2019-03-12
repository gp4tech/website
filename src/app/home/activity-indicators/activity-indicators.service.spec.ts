import { TestBed } from '@angular/core/testing';

import { ActivityIndicatorsService } from './activity-indicators.service';

describe('ActivityIndicatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivityIndicatorsService = TestBed.get(ActivityIndicatorsService);
    expect(service).toBeTruthy();
  });
});
