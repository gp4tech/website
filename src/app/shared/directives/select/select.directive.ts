import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

import { FormSelect } from 'materialize-css';

@Directive({
  selector: '[gpSelect]',
})
export class SelectDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const options = {
      dropdownOptions: this.elementRef.nativeElement.children,
    };
    FormSelect.init(this.elementRef.nativeElement, options);
  }
}
