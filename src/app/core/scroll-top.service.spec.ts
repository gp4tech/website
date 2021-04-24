import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScrollTopService } from './scroll-top.service';

describe('ScrollTopService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ScrollTopService],
    }),
  );

  it('should be created', () => {
    const service: ScrollTopService = TestBed.get(ScrollTopService);
    expect(service).toBeTruthy();
  });
});
