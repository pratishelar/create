import { Component, OnInit } from '@angular/core';
import { RatePlanSelectionService } from './ratePlanSelection.service';

@Component({
  selector: 'app-ratePlansSelection',
  templateUrl: './ratePlansSelection.component.html',
  styleUrls: ['./ratePlansSelection.component.css'],
})
export class RatePlansSelectionComponent implements OnInit {
  ratePlans = [];
  constructor(private ratePlanSelectionService: RatePlanSelectionService) {}

  ngOnInit() {
    this.ratePlanSelectionService.getRatePlans().subscribe((response) => {
      this.ratePlans = response;
      console.log(response);
    });
  }
}
