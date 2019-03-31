import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';

@NgModule({
  declarations: [ParallaxDirective, WaitingSpinnerComponent],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, ParallaxDirective, WaitingSpinnerComponent]
})
export class SharedModule {}
