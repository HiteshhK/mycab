import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DriverContainerComponent } from './driver-container/driver-container.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [],
  imports: [CommonModule,
    GoogleMapsModule,
SharedModule,
    RouterModule.forChild([{path:'',component:DriverContainerComponent}])],
})
export class DriverModule { }
