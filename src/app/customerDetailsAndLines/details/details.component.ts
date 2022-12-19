import { Component, OnInit } from '@angular/core';
import { CustomerDetailsAndLinesService } from '../customerDetailsAndLines.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  ContactInformation;
  AccountInformation;

  constructor(
    private customerDetailsAndLinesService: CustomerDetailsAndLinesService
  ) {}

  ngOnInit() {
    this.customerDetailsAndLinesService.getCustomerByAccountNumber().subscribe(
      (response:any) => {
        this.ContactInformation = response.ContactInformation[0];
        this.AccountInformation = response.AccountInformation[0];
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
