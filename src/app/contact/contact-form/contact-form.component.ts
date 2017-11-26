import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'; 
import { Contact } from '../contact.model';
import { Router } from '@angular/router';
import { ContactDataService } from './../contact-data.service';
import { ValidationService} from '../../validation.service'

import { Observable } from 'rxjs/Rx';
import {ControlMessagesComponent} from '../../control-messages/control-messages.component'


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [ ContactDataService ]
})
export class ContactFormComponent implements OnInit {

  @Output() public newContact = new EventEmitter<Contact>();
  private contact: FormGroup;

  constructor(private fb: FormBuilder, private _contactDataService: ContactDataService, private _router: Router) { }

  ngOnInit() {
    this.contact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2), ValidationService.emailValidator]],
      comment: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  onSubmit() {
    const contact = new Contact(this.contact.value.name, this.contact.value.email, this.contact.value.comment, new Date());
    if (this.contact.dirty && this.contact.valid) {
      this._contactDataService.addNewContact(contact).subscribe(item => {
        this._router.navigate(['contact']);
      }
    );
    }
    
    // this.newRecipe.emit(recipe);
  }

}
