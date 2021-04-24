import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { SupporterService } from './supporter.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('SupporterService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        SupporterService,
      ],
    }),
  );

  it('should be created', () => {
    const service: SupporterService = TestBed.get(SupporterService);
    expect(service).toBeTruthy();
  });
});
