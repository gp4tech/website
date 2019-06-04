import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    HomeModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
