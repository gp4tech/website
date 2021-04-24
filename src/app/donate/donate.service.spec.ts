import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DonateService } from './donate.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('DonateService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        DonateService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    }),
  );

  it('should be created', () => {
    const service: DonateService = TestBed.get(DonateService);
    expect(service).toBeTruthy();
  });
});
