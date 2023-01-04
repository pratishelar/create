import { Component, OnInit } from '@angular/core';
import { AddonSelectionService } from './addonSelection.service';

@Component({
  selector: 'app-addonSelection',
  templateUrl: './addonSelection.component.html',
  styleUrls: ['./addonSelection.component.css'],
})
export class AddonSelectionComponent implements OnInit {
  addons = [];
  constructor(private addonSelectionService: AddonSelectionService) {}

  ngOnInit() {
    this.addonSelectionService.getAddons().subscribe((response) => {
      this.addons = response.productDetails.productDetail;
      console.log(response);
    });
  }
}
