import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Collapsible } from 'materialize-css';

@Component({
  selector: 'gp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  latitude = -17.365927;
  longitude = -66.175482;
  zoom = 18;

  @ViewChild('collapsible')
  collapsible: ElementRef;

  constructor() {}

  ngOnInit() {
    Collapsible.init(this.collapsible.nativeElement);
  }
}
