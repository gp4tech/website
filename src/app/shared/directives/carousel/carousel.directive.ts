import { Directive, OnInit, ElementRef } from '@angular/core';

import { Carousel } from 'materialize-css';

@Directive({
  selector: '[gpCarousel]'
})
export class CarouselDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Carousel.init(this.elementRef.nativeElement, {
      fullWidth: true,
      indicators: true
    });
  }
}
