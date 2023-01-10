import { Component, OnInit } from '@angular/core';
import { PhoneNumberSelectionService } from '../phoneNumberSelection.service';

@Component({
  selector: 'app-newLine',
  templateUrl: './newLine.component.html',
  styleUrls: ['./newLine.component.css']
})
export class NewLineComponent implements OnInit {

  telephoneNumbers = [];
  constructor(private phoneNumberSelectionService: PhoneNumberSelectionService) {}

  ngOnInit() {
    this.phoneNumberSelectionService.getTelephoneNumbers().subscribe((response) => {
      this.telephoneNumbers = response.telephoneNumber;
      console.log(response);
    });
  }
}
