import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Sponsor } from 'src/app/shared/models/sponsor.model';
import { SponsorsService } from './sponsors.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'gp-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors$: Observable<Sponsor[]>;
  baseUrl = environment.firebaseStorageUrl;

  constructor(private sponsorsService: SponsorsService) {}

  ngOnInit() {
    this.sponsors$ = this.sponsorsService.getAll();
  }
}
