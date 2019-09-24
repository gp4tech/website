import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Subscription } from 'rxjs';

import { TestimonialsService } from './testimonials.service';
import { LanguageService } from '../../core/language.service';
import { Testimonial } from '../../shared/models/testimonial.model';
import { CarouselDirective } from '../../shared/directives/carousel/carousel.directive';
import { environment } from '../../../environments/environment';

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

  @ViewChild(CarouselDirective, { static: false }) carouselView;

  constructor(
    private testimonialService: TestimonialsService,
    public language: LanguageService
  ) {}

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
