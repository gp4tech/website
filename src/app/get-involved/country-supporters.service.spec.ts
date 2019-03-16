import { TestBed } from '@angular/core/testing';

import { CountrySupportersService } from './country-supporters.service';

describe('CountrySupportersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrySupportersService = new CountrySupportersService();
    expect(service).toBeTruthy();
  });
});
