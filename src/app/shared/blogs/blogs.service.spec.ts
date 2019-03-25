import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { BlogsService } from './blogs.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('BlogsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        BlogsService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: BlogsService = TestBed.get(BlogsService);
    expect(service).toBeTruthy();
  });
});
