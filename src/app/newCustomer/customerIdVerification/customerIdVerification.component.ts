import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewCustomeServiceService } from '../newCustomeService.service';

@Component({
  selector: 'app-customerIdVerification',
  templateUrl: './customerIdVerification.component.html',
  styleUrls: ['./customerIdVerification.component.css']
})
export class CustomerIdVerificationComponent implements OnInit {
  message: string;
  subscription: Subscription;

  constructor(private data: NewCustomeServiceService) {}

  ngOnInit() {
    this.subscription = this.data.currentLine.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
