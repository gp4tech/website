import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { CountrySupportersService } from './country-supporters.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('CountrySupportersService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: AngularFirestore, useValue: angularFirestoreMock },
        CountrySupportersService,
      ],
    }),
  );

  it('should be created', () => {
    const service: CountrySupportersService = TestBed.get(
      CountrySupportersService,
    );
    expect(service).toBeTruthy();
  });
});
