import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PersonalDetailsComponent } from './manage-team/personal-details/personal-details.component';
import { BankDetailComponent } from './manage-team/bank-detail/bank-detail.component';
import { ProfessionalDetailsComponent } from './manage-team/professional-details/professional-details.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    TeamDetailComponent,
    ManageTeamComponent,
    NotFoundComponent,
    PersonalDetailsComponent,
    BankDetailComponent,
    ProfessionalDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule ,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
   
   
  ],
  providers: [
    HttpClient,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
