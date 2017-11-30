import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { RaterComponent } from './rating/rater/rater.component';
import { RatingsListComponent } from './rating/ratings-list/ratings-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ValidationService } from './validation.service';
import { AuthenticationService } from './user/authentication.service';
import { AuthGuardService } from './user/auth-guard.service';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ControlMessagesComponent} from './control-messages/control-messages.component';
import { RatingModule } from './rating/rating.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    /*RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),*/
    RouterModule,
    BrowserModule,
    HttpModule,
    UserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ ValidationService],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule]
})
export class AppModule { }
