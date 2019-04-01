import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { WhoDidThisService } from './who-did-this.service';
import { WhoDidThis } from '../shared/models/who-did-this.model';

@Component({
  selector: 'gp-who-did-this',
  templateUrl: './who-did-this.component.html',
  styleUrls: ['./who-did-this.component.scss']
})
export class WhoDidThisComponent implements OnInit {
  whoDidThis$: Observable<WhoDidThis[]>;

  constructor(private whoDidThisService: WhoDidThisService) {}

  ngOnInit() {
    this.whoDidThis$ = this.whoDidThisService.getAll();
  }
}
