import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { WhoDidThisModule } from './who-did-this/who-did-this.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    HomeModule,
    LayoutModule,
    WhoDidThisModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
