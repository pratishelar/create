import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creditCheckResults',
  templateUrl: './creditCheckResults.component.html',
  styleUrls: ['./creditCheckResults.component.css'],
})
export class CreditCheckResultsComponent implements OnInit {
  @Input() data: any;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
