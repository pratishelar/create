import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  @Input() service;
  constructor() { }

  ngOnInit() {
    console.log(this.service);
  }

}
