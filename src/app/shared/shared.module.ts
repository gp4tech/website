import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';
import { SelectDirective } from './directives/select/select.directive';

@NgModule({
  declarations: [ParallaxDirective, WaitingSpinnerComponent, SelectDirective],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, ParallaxDirective, WaitingSpinnerComponent, SelectDirective]
})
export class SharedModule {}
