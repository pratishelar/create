import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmCustomerResolver } from '../_resolver/confirm-customer.resolver';
import { SharedModule } from '../_shared/shared.module';
import { ConfirmCustomerComponent } from './confirmCustomer.component';

@NgModule({
  declarations: [ConfirmCustomerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmCustomerComponent,
        resolve: { confirmCustomer: ConfirmCustomerResolver },
      },
    ]),
  ],
  exports: [ConfirmCustomerComponent],
})
export class ConfirmCustomerModule {}
