import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ContactDataService} from './contact-data.service';
import {ContactResolver} from './contact-resolver.service';
import {ControlMessagesComponent} from '../control-messages/control-messages.component'
import {ContactFormComponent} from './contact-form/contact-form.component';

import { AppModule } from '../app.module';


const routes = [
  { path: '', component: ContactFormComponent },
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ],
  declarations: [
    ControlMessagesComponent,
    ContactFormComponent,
  ],
  providers: [
    ContactDataService,
    ContactResolver
  ],
  exports: [ReactiveFormsModule, ControlMessagesComponent]
})
export class ContactModule { }
