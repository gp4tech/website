import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { MembersService } from './members.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('MembersService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[
        MembersService,
        { 
          provide: AngularFirestore,
          useValue: angularFirestoreMock 
        }
      ]
    }));

  it('should be created', () => {
    const service: MembersService = TestBed.get(MembersService);
    expect(service).toBeTruthy();
  });
});
