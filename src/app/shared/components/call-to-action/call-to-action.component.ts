import { Component, Input } from '@angular/core';

@Component({
  selector: 'gp-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent {
  @Input() text: string;
  @Input() link: string;
}
