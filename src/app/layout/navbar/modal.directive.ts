import { Directive, OnInit, ElementRef } from '@angular/core';

import { Modal } from 'materialize-css';

@Directive({
  selector: '[gpModal]'
})
export class ModalDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    Modal.init(this.elementRef.nativeElement);
  }
}
