import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-employeedecision',
  templateUrl: './employeedecision.component.html',
  styleUrls: ['./employeedecision.component.css'],
  providers: [ContactService]
})
export class EmployeedecisionComponent implements OnInit {
  contact: Contact ;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAllData().subscribe(contact2 => {this.contact = contact2; console.log(contact2[0].first_name)});
  }

  getContact()
{
   this.contactService.getAllData().subscribe(contact2 => {this.contact = contact2; console.log(contact2[0].first_name)});
}
}
