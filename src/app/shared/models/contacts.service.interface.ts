import { Observable } from 'rxjs';
import { Contacts } from './contacts';

export interface IContactsService {
  getContacts(): Observable<Contacts[]>;
}
