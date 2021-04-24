import { Directive, ElementRef, OnInit } from '@angular/core';

import { Parallax } from 'materialize-css';

@Directive({
  selector: '[gpParallax]',
})
export class ParallaxDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    Parallax.init(this.elementRef.nativeElement);
  }
}
