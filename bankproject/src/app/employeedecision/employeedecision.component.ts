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
  loadInfor: any[]=[];
  email: string;
  show: boolean=true;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAllData().subscribe(contact2 => {this.contact = contact2; console.log(contact2[0].first_name)});
  }

  getContact()
{
   this.contactService.getAllData().subscribe(contact2 => {this.contact = contact2; console.log(contact2[0].first_name)});
}
  loadContact(email){
    this.show=!this.show;
    this.contactService.getContacts(email).subscribe(posts=>{this.loadInfor=posts})
  }

  accepted(email)
  {
    this.contactService.updateData(email, "Accpeted").subscribe(posts=>{console.log("it worked")})
  }
}
