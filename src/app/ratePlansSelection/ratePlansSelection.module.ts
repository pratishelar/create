import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatePlansSelectionComponent } from './ratePlansSelection.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: RatePlansSelectionComponent },
    ]),
    CommonModule,
    SharedModule,
  ],
  declarations: [RatePlansSelectionComponent],
})
export class RatePlansSelectionModule {}
