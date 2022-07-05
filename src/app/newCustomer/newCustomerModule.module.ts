import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { BusinessAccountComponent } from './BusinessAccount/BusinessAccount.component';
import { BusinessDetailsComponent } from './businessDetails/businessDetails.component';
import { ContactInformationComponent } from './contactInformation/contactInformation.component';
import { CustomerAccountComponent } from './customerAccount/customerAccount.component';
import { CustomerIdVerificationComponent } from './customerIdVerification/customerIdVerification.component';
import { CustomerInformationComponent } from './customerInformation/customerInformation.component';
import { NewCustomerComponent } from './newCustomer.component';
import { CreditCheckResultsComponent } from './_modals/creditCheckResults/creditCheckResults.component';
import { DepositCustomerComponent } from './_modals/depositCustomer/depositCustomer.component';
@NgModule({
  declarations: [
    NewCustomerComponent,
    BusinessAccountComponent,
    BusinessDetailsComponent,
    CustomerAccountComponent,
    CustomerInformationComponent,
    CustomerIdVerificationComponent,
    ContactInformationComponent,
    CreditCheckResultsComponent,
    DepositCustomerComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: NewCustomerComponent },
    ]),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    NewCustomerComponent,
    BusinessAccountComponent,
    BusinessDetailsComponent,
    CustomerAccountComponent,
    CustomerInformationComponent,
    CustomerIdVerificationComponent,
    ContactInformationComponent,
    CreditCheckResultsComponent,
    DepositCustomerComponent,
  ],
})
export class NewCustomerModule {}
