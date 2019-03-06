import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ParallaxDirective } from './parallax/parallax.directive';

@NgModule({
  declarations: [ParallaxDirective],
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule, ParallaxDirective]
})
export class SharedModule {}
