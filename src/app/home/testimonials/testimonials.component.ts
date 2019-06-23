import { Component, OnInit, OnDestroy, ViewChildren, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TestimonialsService } from './testimonials.service';
import { CarouselDirective } from '../../shared/directives/carousel/carousel.directive';
import { LanguageService } from '../../core/language.service';

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

  @ViewChild(CarouselDirective) carouselView;

  constructor(private testimonialService: TestimonialsService, public language: LanguageService) {}

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
