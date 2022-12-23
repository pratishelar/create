import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceSelectionComponent } from './deviceSelection.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { NewDeviceComponent } from './newDevice/newDevice.component';
import { SimOnlyComponent } from './simOnly/simOnly.component';

@NgModule({
  declarations: [DeviceSelectionComponent, NewDeviceComponent, SimOnlyComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: DeviceSelectionComponent }]),
    CommonModule,
    SharedModule,
  ],
})
export class DeviceSelectionModule {}
