import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchCustomerService } from '../searchCustomer/searchCustomer.service';

@Component({
  selector: 'app-confirmCustomer',
  templateUrl: './confirmCustomer.component.html',
  styleUrls: ['./confirmCustomer.component.css'],
})
export class ConfirmCustomerComponent implements OnInit, AfterViewInit {
  customer: any = {};

  constructor(
    public searchCustomerService: SearchCustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.customer = data.confirmCustomer.customerSearchResult[0];
    });
  }

  ngAfterViewInit() {}
}
