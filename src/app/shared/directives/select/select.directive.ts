import { Directive, OnInit, ElementRef } from '@angular/core';

import { FormSelect } from 'materialize-css';

@Directive({
  selector: '[gpSelect]'
})
export class SelectDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    FormSelect.init(this.elementRef.nativeElement);
  }
}
