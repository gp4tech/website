import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WaitingSpinnerComponent } from './components/waiting-spinner/waiting-spinner.component';
import { SelectDirective } from './directives/select/select.directive';
import { CollapsibleDirective } from './directives/collapsible/collapsible.directive';
import { TransparentSectionDirective } from './directives/transparent-section/transparent-section.directive';
import { CarouselDirective } from './directives/carousel/carousel.directive';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { CallToActionModule } from './components/call-to-action/call-to-action.module';
import { RoleConverterPipe } from './pipes/role-converter.pipe';

@NgModule({
  declarations: [
    ParallaxDirective,
    WaitingSpinnerComponent,
    SelectDirective,
    CollapsibleDirective,
    TransparentSectionDirective,
    CarouselDirective,
    PageBannerComponent,
    RoleConverterPipe,
  ],
  imports: [CommonModule, TranslateModule, CallToActionModule],
  exports: [
    TranslateModule,
    ParallaxDirective,
    WaitingSpinnerComponent,
    SelectDirective,
    CollapsibleDirective,
    TransparentSectionDirective,
    CarouselDirective,
    PageBannerComponent,
    RoleConverterPipe,
  ],
})
export class SharedModule {}
