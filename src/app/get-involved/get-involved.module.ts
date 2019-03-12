import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { GoogleChartsModule } from 'angular-google-charts';

import { GetInvolvedComponent } from './get-involved.component';
import { SharedModule } from '../shared/shared.module';
import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { GetInvolvedService } from './get-involved.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [GetInvolvedComponent],
  imports: [
    CommonModule,
    SharedModule,
    GetInvolvedRoutingModule,
    GoogleChartsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [GetInvolvedComponent],
  providers: [GetInvolvedService]
})
export class GetInvolvedModule {}
