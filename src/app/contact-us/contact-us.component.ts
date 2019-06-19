import { Component, OnInit } from '@angular/core';

import { EmailService } from '../core/email.service';
import { Email } from '../shared/models/email.model';
import { ContactInfo } from '../shared/models/contact-info.constant';

@Component({
  selector: 'gp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  displayEmailSection = false;
  email = this.initializeEmail();
  latitude = ContactInfo.companyAddress.latitude;
  longitude = ContactInfo.companyAddress.longitude;
  zoom = 18;

  constructor(private emailService: EmailService) {}

  ngOnInit() {}

  sendEmail() {
    this.emailService.sendEmail(this.email).subscribe(() => {
      this.email = this.initializeEmail();
    });
  }

  private initializeEmail(): Email {
    return {
      from: '',
      to: ContactInfo.email,
      subject: '',
      content: ''
    };
  }
}
