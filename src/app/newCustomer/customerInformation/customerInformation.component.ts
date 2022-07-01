import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerInformation',
  templateUrl: './customerInformation.component.html',
  styleUrls: ['./customerInformation.component.css'],
})
export class CustomerInformationComponent implements OnInit {
  counter(i: number) {
    return new Array(i);
  }
  month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  firstname: string;
  middlename: String
  lastname: string;

  constructor() {}

  ngOnInit() {}
}
