import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardware-upgrade',
  templateUrl: './hardwareUpgrade.component.html',
  styleUrls: ['./hardwareUpgrade.component.css']
})
export class HardwareUpgradeComponent implements OnInit {
  selectedCategory;
  
  constructor() { }

  ngOnInit(): void {
  }

}
