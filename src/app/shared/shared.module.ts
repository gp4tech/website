import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';
import { SelectDirective } from './directives/select/select.directive';
import { CollapsibleDirective } from './directives/collapsible/collapsible.directive';

@NgModule({
  declarations: [ParallaxDirective, WaitingSpinnerComponent, SelectDirective, CollapsibleDirective],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, ParallaxDirective, WaitingSpinnerComponent, SelectDirective, CollapsibleDirective]
})
export class SharedModule {}
