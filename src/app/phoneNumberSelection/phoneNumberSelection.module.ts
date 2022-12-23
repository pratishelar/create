import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberSelectionComponent } from './phoneNumberSelection.component';
import { SharedModule } from '../_shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewLineComponent } from './newLine/newLine.component';
import { PortInComponent } from './portIn/portIn.component';

@NgModule({
  declarations: [
    PhoneNumberSelectionComponent,
    NewLineComponent,
    PortInComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: PhoneNumberSelectionComponent },
    ]),
    CommonModule,
    SharedModule,
  ],
})
export class PhoneNumberSelectionModule {}
