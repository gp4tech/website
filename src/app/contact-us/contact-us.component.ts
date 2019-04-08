import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  latitude = -17.365927;
  longitude = -66.175482;
  zoom = 18;

  constructor() {}

  ngOnInit() {}
}
