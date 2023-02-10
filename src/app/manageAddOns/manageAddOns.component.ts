import { Component, OnInit } from '@angular/core';
import { ManageAddOnsService } from './manageAddOns.service';

@Component({
  selector: 'app-manageAddOns',
  templateUrl: './manageAddOns.component.html',
  styleUrls: ['./manageAddOns.component.css']
})
export class ManageAddOnsComponent implements OnInit {

  addons = [];
  constructor(private manageAddOnsService: ManageAddOnsService) {}

  ngOnInit() {
    this.manageAddOnsService.getAddons().subscribe((response) => {
      this.addons = response.eligibleAddons;
      console.log(response);
    });
  }

}
