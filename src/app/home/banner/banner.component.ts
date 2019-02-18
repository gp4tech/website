import { Component, OnInit } from '@angular/core';

import { Parallax } from 'materialize-css';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const elems = document.querySelectorAll('.parallax');
    Parallax.init(elems);
  }
}
