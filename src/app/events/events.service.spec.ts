import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { EventsService } from './events.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('EventsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        EventsService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });
});
