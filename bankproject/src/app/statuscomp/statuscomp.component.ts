import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-statuscomp',
  templateUrl: './statuscomp.component.html',
  styleUrls: ['./statuscomp.component.css']
})
export class StatuscompComponent implements OnInit {

  constructor(private router: Router) {}
  status(): void {
    this.router.navigateByUrl('instantdecision');
}

  ngOnInit() {
  }

}
