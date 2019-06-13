import { TestBed } from '@angular/core/testing';

import { ScrollTopService } from './scroll-top.service';

describe('ScrollTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollTopService = TestBed.get(ScrollTopService);
    expect(service).toBeTruthy();
  });
});
