import { ContactDataService } from './contact-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Contact } from './contact.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ContactResolver implements Resolve< Contact> {
    constructor(private contactService: ContactDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
        return this.contactService.getContact(route.params['id']);
    }
}
