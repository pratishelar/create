import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareUpgradeComponent } from './hardwareUpgrade.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HardwareUpgradeComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: HardwareUpgradeComponent },
    ]),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: []
})
export class HardwareUpgradeModule { }
