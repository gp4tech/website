import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: Observable<firebase.User>;

  constructor(private afa: AngularFireAuth, public router: Router) {
    this.userData = afa.authState;
  }

  SignIn(email: string, password: string) {
    this.afa
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['/']);
        console.log('Successfully signed in', res);
    })
      .catch((error) => {
        console.log('Something is wrong', error.message);
    });
  }

  SignUp(email: string, password: string) {
    this.afa
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log('Successfully signed up', res);
    })
    .catch((error) => {
      console.log('Something is wrong', error.message);
    });
  }

  SignOut() {
    this.afa
      .auth
      .signOut();
  }
}
