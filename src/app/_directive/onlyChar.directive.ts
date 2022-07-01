import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngModel][OnlyChar]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
  },
})
export class OnlyCharDirective {

  constructor(public ngControl: NgControl) {}

  onInputChange(value) {

    console.log(value)
    var value = value.replace(/[^a-zA-Z]/, '');

    this.ngControl.valueAccessor.writeValue(value);
  }

}


