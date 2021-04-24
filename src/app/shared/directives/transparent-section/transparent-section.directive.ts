import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  OnInit,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[gpTransparentSection]',
})
export class TransparentSectionDirective implements OnInit, AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'top-section');
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.opacity = '1';
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const range = 300;
      const banner = this.elementRef.nativeElement;
      const scrollTop = window.scrollY;
      const height = banner.offsetHeight;
      const offset = height / 1.1;
      const bannerOpacity = 1 - (scrollTop - offset + range) / range;

      banner.style.opacity = bannerOpacity.toString();

      if (bannerOpacity > 1) {
        banner.style.opacity = '1';
      } else if (bannerOpacity < 0) {
        banner.style.opacity = '0';
      }
    }
  }
}
