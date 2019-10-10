import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-applycreditcomp',
  templateUrl: './applycreditcomp.component.html',
  styleUrls: ['./applycreditcomp.component.css'],
  providers: [ContactService]
})
export class ApplycreditcompComponent implements OnInit {
  contact: Contact;
  first_name: string ;
  middle_name: string ;
  last_name: string;
  email: string;
  phone: number;
  ssn: string;
  income: string;
  gender: string;
  dob: Date;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  rent: number;
  employer: string;
  emp_phone: string;
  time_employed: number;
  status: string = "Pending";

  constructor(private router: Router, private contactService: ContactService) {}

  decision(): void {
      this.router.navigateByUrl('instantdecision');
  }

  addContact()
  {
    const newContact: Contact = {
      first_name: this.first_name,
      middle_name: this.middle_name,
      last_name: this.last_name,
      email: this.email,
      phone: this.phone,
      ssn: this.ssn,
      income: this.income,
      gender: this.gender,
      dob: this.dob,
      address: this.address,
      city: this.city,
      state: this.state,
      zipcode: this.zipcode,
      rent: this.rent,
      employer: this.employer,
      emp_phone: this.emp_phone,
      time_employed: this.time_employed,
      status: this.status
    }
    
    this.contactService.addContact(newContact)
  }

  ngOnInit() {
  }

}
