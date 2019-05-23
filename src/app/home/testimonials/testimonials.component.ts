import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Testimonial } from '../../shared/models/testimonial.model';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'gp-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials$: Observable<Testimonial[]>;

  constructor(private testimonialService: TestimonialsService) {}

  ngOnInit() {
    this.testimonials$ = this.testimonialService.getAll();
  }
}
