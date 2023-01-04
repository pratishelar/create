import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SummaryComponent },
  ]),
  SharedModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule { }
