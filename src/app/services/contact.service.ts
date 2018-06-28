import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Contact } from './contact.model';

@Injectable()
export class ContactService{
    getContacts(){
        return Promise.resolve(CONTACTS);
    }

    insertContact(contact: Contact){
        Promise.resolve(CONTACTS).then( (contacts: Contact[]) => contacts.push(contact));
    }
}
