import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { TestimonialsService } from './testimonials.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('TestimonialsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        TestimonialsService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    }),
  );

  it('should be created', () => {
    const service: TestimonialsService = TestBed.get(TestimonialsService);
    expect(service).toBeTruthy();
  });
});
