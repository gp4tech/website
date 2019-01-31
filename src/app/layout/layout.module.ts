import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbCollapseModule,
  ]
})
export class LayoutModule { }
