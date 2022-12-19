import { Component, OnInit } from '@angular/core';
import { CustomerDetailsAndLinesService } from '../customerDetailsAndLines.service';

@Component({
  selector: 'app-linesAndDevices',
  templateUrl: './linesAndDevices.component.html',
  styleUrls: ['./linesAndDevices.component.scss']
})
export class LinesAndDevicesComponent implements OnInit {
  Services;
  wearables;

  constructor(private customerDetailsAndLinesService: CustomerDetailsAndLinesService) { }

  ngOnInit() {
    this.customerDetailsAndLinesService.getServicesByContactId().subscribe(
      (response:any) => {
        this.Services = response.Services.Service;
        this.wearables = response.wearables;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

