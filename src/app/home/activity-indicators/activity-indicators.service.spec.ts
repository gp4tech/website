import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { ActivityIndicatorsService } from './activity-indicators.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('ActivityIndicatorsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ActivityIndicatorsService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    }),
  );

  it('should be created', () => {
    const service: ActivityIndicatorsService = TestBed.get(
      ActivityIndicatorsService,
    );
    expect(service).toBeTruthy();
  });
});
