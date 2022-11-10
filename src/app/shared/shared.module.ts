import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import {MatCardModule} from '@angular/material/card';
import { SearchLocationComponent } from './search-location/search-location.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { ContactsComponent } from './contacts/contacts.component';
import { TimerComponent } from './timer/timer.component';

const sharedModule=[MatCardModule,
  HttpClientModule,
  MatMenuModule,
      MatInputModule,
      FormsModule,ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      GoogleMapsModule,
      MatChipsModule,
      MatSidenavModule,]
@NgModule({
  declarations: [RatingsComponent, SearchLocationComponent, ContactsComponent, TimerComponent],
  imports: [
    CommonModule,
    ...sharedModule

  ],
  exports:[RatingsComponent,SearchLocationComponent,...sharedModule,ContactsComponent,TimerComponent],
})
export class SharedModule { }
