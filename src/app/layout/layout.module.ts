import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavDirective } from './navbar/sidenav.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    SidenavDirective
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
