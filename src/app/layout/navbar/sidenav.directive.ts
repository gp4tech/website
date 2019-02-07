import { Directive, OnInit, ElementRef } from '@angular/core';
import { Sidenav } from 'materialize-css';

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    Sidenav.init(this.elementRef.nativeElement);
  }
}
