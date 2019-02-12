import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogComponent
  ],
  exports: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
