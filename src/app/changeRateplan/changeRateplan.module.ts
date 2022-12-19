import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChangeRateplanComponent } from './changeRateplan.component';



@NgModule({
  declarations: [
    ChangeRateplanComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: ChangeRateplanComponent },
    ]),
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: []
})
export class ChangeRateplanModule { }
