import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { CountrySupportersService } from './country-supporters.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('CountrySupportersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: AngularFirestore, useValue: angularFirestoreMock },
      CountrySupportersService
    ]
  }));

  it('should be created', () => {
    const service: CountrySupportersService = TestBed.get(CountrySupportersService);
    expect(service).toBeTruthy();
  });
});
