import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import {ContactDataService} from './contact-data.service';
import {ContactResolver} from './contact-resolver.service';

import {ContactFormComponent} from './contact-form/contact-form.component';
import {ControlMessagesComponent} from '../control-messages/control-messages.component'

const routes = [
  { path: '', component: ContactFormComponent },
  //{ path: 'rater', component: RaterComponent}
  //{ path: 'add', component: AddRecipeComponent },
  //{ path: ':id', component: RatingDetailComponent,
  //  resolve: { recipe: RatingResolver} }
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactFormComponent,

  ],
  providers: [
    ContactDataService,
    ContactResolver
  ],
})
export class ContactModule { }
