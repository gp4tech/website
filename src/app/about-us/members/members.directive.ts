import { Directive, Renderer2, ElementRef } from '@angular/core';
import { MembersService } from './members.service';

@Directive({
  selector: '[gpMembers]'
})
export class MembersDirective {

  constructor(private elementRef: ElementRef, 
    private membersService: MembersService) { }

  ngAfterContentInit(): void {
    this.membersService.setMaxHeight(this.elementRef.nativeElement.offsetHeight);
  }

  ngAfterContentChecked(): void {
    this.elementRef.nativeElement.style.height = (this.membersService.getMaxHeight() + 30) + 'px';
  }
}
