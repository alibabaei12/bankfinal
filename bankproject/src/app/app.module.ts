import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component';
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component';
import { StatuscompComponent } from './statuscomp/statuscomp.component';
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component';
import { HeaderComponent } from './header.component';
import { AppRouting } from './app.routing';
import { LogoutComponent } from './logout/logoutcomp.component';
import { EmpLoginComponent } from './emplogincomp/emplogincomp.component';
import { UserLoginComponent } from './userlogincomp/userlogincomp.component';
import { DropDownDirective } from './shared/dropdown.service'
import { BankingComponent } from './banking/banking.component'

import { HttpModule } from '@angular/http';
import {ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplycreditcompComponent,
    InstantdecisioncompComponent,
    StatuscompComponent,
    RetrieveapplicationcompComponent,
    HeaderComponent,
    LogoutComponent,
    EmpLoginComponent,
    UserLoginComponent,
    DropDownDirective,
    BankingComponent
  ],
  imports: [
    BrowserModule, AppRouting, FormsModule, HttpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
