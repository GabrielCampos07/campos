import { Injectable } from '@angular/core';
import { IContactsService } from '../models/contacts.service.interface';
import { Contacts } from '../models/contacts';
import contacts from '../mocks/contacts.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService implements IContactsService {
  constructor() {}

  private contacts: Contacts[] = contacts;

  getContacts(): Observable<Contacts[]> {
    return of(this.contacts);
  }
}
