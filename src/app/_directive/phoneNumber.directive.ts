import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][phoneNumber]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
  },
})
export class PhoneNumberDirective {
  constructor(public ngControl: NgControl) {}

  onInputChange(value) {
    var x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    this.ngControl.valueAccessor.writeValue(value);
  }
}
