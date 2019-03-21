import { TestBed } from '@angular/core/testing';

import { BlogsService } from './blogs.service';

describe('BlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogsService = TestBed.get(BlogsService);
    expect(service).toBeTruthy();
  });
});
