import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-statuscomp',
  templateUrl: './statuscomp.component.html',
  styleUrls: ['./statuscomp.component.css']
})
export class StatuscompComponent implements OnInit {
  contact: Contact ;
  
  email: any;
  constructor(private router: Router,private contactService: ContactService ) {}
  status(): void {
    this.router.navigateByUrl('instantdecision');
}


  getContact()
  {
    this.contactService.getContacts(this.email).subscribe(contact2 => {this.contact = contact2; console.log(contact2[0].first_name)});
  }
  ngOnInit() {
  }

}
