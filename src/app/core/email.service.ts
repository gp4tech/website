import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Email } from '../shared/models/email.model';
import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {
  emailEndpoint = `${environment.functionsUrl}/httpEmail`;
  defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) {}

  sendEmail(email: Email) {
    return this.http.post(this.emailEndpoint, email, {
      headers: this.defaultHeaders,
    });
  }
}
