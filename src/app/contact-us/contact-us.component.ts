import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gp-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  title: string = 'My first AGM project';
  latitude = -17.365937266267544;
  longitude = -66.1754822731018;
  zoom= 18;

  constructor() { }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    console.log($event)
  }

}
