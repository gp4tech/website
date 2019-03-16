import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

interface TestDataType {}

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService<TestDataType> = null;
    expect(service).toBeTruthy();
  });
});
