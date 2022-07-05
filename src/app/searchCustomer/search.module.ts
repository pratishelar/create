import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { SearchCustomerComponent } from './searchCustomer.component';
@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: SearchCustomerComponent },
    ]),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [SearchCustomerComponent],
})
export class SearchModule {}
