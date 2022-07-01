import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { SearchCustomerService } from './searchCustomer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchCustomer',
  templateUrl: './searchCustomer.component.html',
  styleUrls: ['./searchCustomer.component.css'],
})
export class SearchCustomerComponent implements OnInit {
  phoneNumber: string;
  accountNumber:string;
  constructor(
    public searchCustomerService: SearchCustomerService,
    private router: Router
  ) {}

  ngOnInit() {}

  search() {
    this.router.navigate(['/ConfirmCustomer']);
  }
}
