import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageButtonComponent } from './navbar/language-button/language-button.component';
import { SidenavDirective } from './navbar/sidenav.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LanguageButtonComponent,
    SidenavDirective
  ],
  exports: [NavbarComponent, FooterComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class LayoutModule {}
