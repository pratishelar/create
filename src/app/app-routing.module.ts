import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmCustomerComponent } from './confirmCustomer/confirmCustomer.component';
import { BusinessAccountComponent } from './newCustomer/BusinessAccount/BusinessAccount.component';
import { CustomerAccountComponent } from './newCustomer/customerAccount/customerAccount.component';
import { NewCustomerComponent } from './newCustomer/newCustomer.component';
import { SearchCustomerComponent } from './searchCustomer/searchCustomer.component';
import { ConfirmCustomerResolver } from './_resolver/confirm-customer.resolver';

const routes: Routes = [
  { path: 'Customerlookup', component: SearchCustomerComponent },
  { path: 'ConfirmCustomer', component: ConfirmCustomerComponent, resolve: { confirmCustomer: ConfirmCustomerResolver } },
  { path: 'Newcustomer', component: NewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
