import { TestBed } from '@angular/core/testing';

import { TestimonialsService } from './testimonials.service';

describe('TestimonialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestimonialsService = TestBed.get(TestimonialsService);
    expect(service).toBeTruthy();
  });
});
