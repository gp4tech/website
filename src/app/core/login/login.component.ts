import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'gp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              public language: LanguageService) {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  signIn() {
    this.authService.SignIn(this.f.email.value, this.f.password.value);
  }

  signUp() {
    this.authService.SignUp(this.f.email.value, this.f.password.value);
  }

  signOut() {
    this.authService.SignOut();
  }
}
