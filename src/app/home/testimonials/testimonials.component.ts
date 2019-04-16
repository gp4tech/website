import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../../shared/models/testimonials.model';
import { TestimonialsService } from './testimonials.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


@Component({
  selector: 'gp-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials$: Observable<Testimonials[]>;
  baseUrl = environment.firebaseStorageUrl;
  constructor( private testimonialService: TestimonialsService) { }

  ngOnInit() {
    this.testimonials$ = this.testimonialService.getAll();
  }

}
