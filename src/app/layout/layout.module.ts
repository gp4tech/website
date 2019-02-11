import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { LanguageButtonComponent } from './navbar/language-button/language-button.component';
import { SidenavDirective } from './navbar/sidenav.directive';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

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
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}
