import { RouterModule } from '@angular/router'
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component'
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component'
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component'
import { StatuscompComponent } from './statuscomp/statuscomp.component'
import { EmpLoginComponent } from './emplogincomp/emplogincomp.component'
import { UserLoginComponent } from './userlogincomp/userlogincomp.component';
import {LogoutComponent} from './logout/logoutcomp.component';
import {HeaderComponent} from './header.component';
import { BankingComponent } from './banking/banking.component'


export const AppRouting = RouterModule.forRoot ([
    {path:'applycredit', component: ApplycreditcompComponent},
    {path:'instantdecision', component: InstantdecisioncompComponent},
    {path:'retrieve', component: RetrieveapplicationcompComponent},
    {path:'status', component: StatuscompComponent},
    {path:'emplogin', component: EmpLoginComponent},
    {path:'userlogin', component: UserLoginComponent},
    {path:'logout', component: LogoutComponent},
    {path:'header', component: HeaderComponent},
    {path:'banking', component: BankingComponent},
    
])                          