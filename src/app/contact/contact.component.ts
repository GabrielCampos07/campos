import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/models/contacts';
import { ContactsService } from '../shared/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts: Contacts[] = [];

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactService
      .getContacts()
      .subscribe((contacts) => (this.contacts = contacts));
  }

  sentTo(link: string): void {
    window.open(link);
  }
}
