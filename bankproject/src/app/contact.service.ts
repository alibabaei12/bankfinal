import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Contact} from './contact';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  //retreiving contacts

  getContacts(email)
  {

    return  this.http.get('http://localhost:3000/api/contacts/'+ email)
    .map(res => res.json())

  }

  //add contact method 
  addContact(newContact)
  {
    // var headers = new  Headers();
    // headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact)
    .map(res => res.json());
    // , {headers:headers}
  }

  //delete method
  deleteContact(id)
  {
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    .map(res => res.json());
  }
}
