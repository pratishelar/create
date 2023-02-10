import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAddOnsComponent } from './manageAddOns.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  declarations: [
    ManageAddOnsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ManageAddOnsComponent },
    ]),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
})
export class ManageAddOnsModule { }
