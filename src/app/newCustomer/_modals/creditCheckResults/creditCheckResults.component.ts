import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creditCheckResults',
  templateUrl: './creditCheckResults.component.html',
  styleUrls: ['./creditCheckResults.component.css'],
})
export class CreditCheckResultsComponent implements OnInit {
  @Input() data: any;
  constructor(public activeModal: NgbActiveModal,private _router: Router) {}

  ngOnInit() {}

  navigate(){
    // this.router.navigateByUrl('/second'); 
    this._router.navigate(['first'])
  }
    
}
