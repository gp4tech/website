import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[gpImageResizer]',
})
export class ImageResizerDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('load')
  onImageLoaded(): void {
    this.elementRef.nativeElement.style.height =
      this.elementRef.nativeElement.offsetWidth + 'px';
  }
}
