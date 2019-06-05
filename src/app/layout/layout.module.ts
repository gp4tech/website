import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { LanguageButtonComponent } from './language-button/language-button.component';
import { DonateModalComponent } from './navbar/donate-modal/donate-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ModalDirective } from './navbar/modal.directive';
import { SidenavDirective } from './navbar/sidenav.directive';
import { DonateService } from './navbar/donate-modal/donate.service';

@NgModule({
  declarations: [
    FooterComponent,
    DonateModalComponent,
    NavbarComponent,
    LanguageButtonComponent,
    ModalDirective,
    SidenavDirective
  ],
  exports: [FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [DonateService]
})
export class LayoutModule {}
