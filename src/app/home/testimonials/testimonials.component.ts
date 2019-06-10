import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'gp-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonialsSub: Subscription;
  testimonials: Testimonial[];
  baseUrl = environment.firebaseStorageUrl;
  isLoading = true;

  constructor(private testimonialService: TestimonialsService) {}

  ngOnInit() {
    this.testimonialsSub = this.testimonialService
      .getAll()
      .subscribe((testimonials: Testimonial[]) => {
        this.testimonials = testimonials;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.testimonialsSub.unsubscribe();
  }
}
