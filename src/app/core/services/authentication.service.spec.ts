import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

const angularFireAuthMock = {
  collection: () => {}
};

const routerMock = {
  collection: () => {}
};

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      AuthenticationService,
      { provide: AngularFireAuth, useValue: angularFireAuthMock },
      { provide: Router, useValue: routerMock }
    ]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
