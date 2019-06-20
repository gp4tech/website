import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';

import { Carousel } from 'materialize-css';

@Directive({
  selector: '[gpCarousel]'
})
export class CarouselDirective implements AfterViewInit {

  @Input() autoSlide = true;
  carousel: Carousel;
  intervalId = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.carousel = Carousel.init(this.elementRef.nativeElement, {
      fullWidth: true,
      indicators: true
    });

    this.startAutoSlide();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.startAutoSlide();
  }

  @HostListener('click') onClick() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    if (this.autoSlide && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.carousel.next();
      }, 8000);
    }
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  next() {
    this.carousel.next();
  }

  previous() {
    this.carousel.prev();
  }
}
