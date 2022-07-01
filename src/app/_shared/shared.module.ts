import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyCharDirective } from '../_directive/onlyChar.directive';
import { PhoneNumberDirective } from '../_directive/phoneNumber.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    OnlyCharDirective,
    PhoneNumberDirective,
  ],
  exports: [OnlyCharDirective, PhoneNumberDirective],
})
export class SharedModule {}
