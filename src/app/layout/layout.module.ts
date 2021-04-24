import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavDirective } from './navbar/sidenav.directive';

@NgModule({
  declarations: [
    FooterComponent,
    LanguageButtonComponent,
    NavbarComponent,
    SidenavDirective,
  ],
  exports: [FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class LayoutModule {}
