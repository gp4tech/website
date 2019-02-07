import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageButtonComponent } from '../custom/language-button/language-button.component';

@NgModule({
  declarations: [NavbarComponent, LanguageButtonComponent],
  exports: [NavbarComponent, LanguageButtonComponent],
  imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
