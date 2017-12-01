import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Contact } from './contact.model';
import { AuthenticationService } from '../user/authentication.service';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactDataService {

  private _appUrl = '/api/';
  private _contacts;
  
  constructor(private http: Http, 
    private auth: AuthenticationService
  ) { }

  get contacts(): Observable<Contact[]> {
    return this.http.get(`${this._appUrl}contacts`,
    //{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
    .map(response => response.json().map(item => Contact.fromJSON(item)));
  }

  getContact(id): Observable<Contact> {
    return this.http.get(`${this._appUrl}contact/${id}`)
      .map(response => response.json()).map(item => Contact.fromJSON(item));
  }

  addNewContact(rec): Observable<Contact> {
    return this.http.post(`${this._appUrl}contacts`, rec, 
      //{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }
    )
      .map(res => res.json()).map(item => Contact.fromJSON(item));
  }

}