import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceSelectionComponent } from './deviceSelection.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { NewDeviceComponent } from './inStorePurchase/newDevice/newDevice.component';
import { SimOnlyComponent } from './inStorePurchase/simOnly/simOnly.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InStorePurchaseComponent } from './inStorePurchase/inStorePurchase.component';
import { DirectShipmentComponent } from './directShipment/directShipment.component';

@NgModule({
  declarations: [
    DeviceSelectionComponent,
    InStorePurchaseComponent,
    DirectShipmentComponent,
    NewDeviceComponent,
    SimOnlyComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: DeviceSelectionComponent }]),
    CommonModule,
    SharedModule,
    FormsModule,
  ],
})
export class DeviceSelectionModule {}
