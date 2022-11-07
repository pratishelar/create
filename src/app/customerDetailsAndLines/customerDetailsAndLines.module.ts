import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsAndLinesComponent } from './customerDetailsAndLines.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LinesAndDevicesComponent } from './linesAndDevices/linesAndDevices.component';
import { PhoneComponent } from './linesAndDevices/phone/phone.component';
import { WearableComponent } from './linesAndDevices/wearable/wearable.component';
import { PaymentComponent } from './payment/payment.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [
    CustomerDetailsAndLinesComponent,
    DetailsComponent,
    LinesAndDevicesComponent,
    PhoneComponent,
    WearableComponent,
    PaymentComponent,
    PromotionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerDetailsAndLinesComponent,
      },
    ]),
  ],
  exports: [CustomerDetailsAndLinesComponent],
})
export class CustomerDetailsAndLinesModule {}
