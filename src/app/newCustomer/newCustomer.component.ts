import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewCustomeServiceService } from './newCustomeService.service';

@Component({
  selector: 'app-newCustomer',
  templateUrl: './newCustomer.component.html',
  styleUrls: ['./newCustomer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  lineType: string;
  subscription: Subscription;
  hideHomeInternet: boolean = true;

  constructor(private data: NewCustomeServiceService) {}

  ngOnInit() {
    this.subscription = this.data.currentLine.subscribe(
      (lineType) => (this.lineType = lineType)
    );
  }

  changeLineType(lineType) {
    this.lineType = lineType;
    this.data.changeLineType(this.lineType);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
