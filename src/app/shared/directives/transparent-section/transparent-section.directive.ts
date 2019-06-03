import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[gpTransparentSection]'
})
export class TransparentSectionDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
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
