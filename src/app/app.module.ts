import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CabBookingModalComponent } from './components/cab-booking-modal/cab-booking-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AvailableCabsComponent } from './components/available-cabs/available-cabs.component';
import { SharedModule } from './shared/shared.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DriverContainerComponent } from './driver-container/driver-container.component';
@NgModule({
  declarations: [
    AppComponent,
    AvailableCabsComponent,
    CabBookingModalComponent,
    SideNavComponent,
    DriverContainerComponent

  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
