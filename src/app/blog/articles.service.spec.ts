import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesService } from './articles.service';

const angularFirestoreMock = {
  collection: () => {},
};

describe('ArticlesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ArticlesService,
        { provide: AngularFirestore, useValue: angularFirestoreMock },
      ],
    }),
  );

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
