import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { SponsorsService } from './sponsors.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('SponsorsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        SponsorsService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: SponsorsService = TestBed.get(SponsorsService);
    expect(service).toBeTruthy();
  });
});
