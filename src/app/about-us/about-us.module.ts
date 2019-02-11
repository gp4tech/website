import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  exports: [
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutUsModule { }
