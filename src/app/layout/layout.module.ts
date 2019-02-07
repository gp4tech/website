import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { LanguageButtonComponent } from './navbar/language-button/language-button.component';
import { SidenavDirective } from './navbar/sidenav.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    LanguageButtonComponent,
    SidenavDirective
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule {}
