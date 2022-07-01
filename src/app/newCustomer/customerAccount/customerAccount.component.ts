import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NewCustomeServiceService } from '../newCustomeService.service';
import { CreditCheckResultsComponent } from '../_modals/creditCheckResults/creditCheckResults.component';

@Component({
  selector: 'app-customerAccount',
  templateUrl: './customerAccount.component.html',
  styleUrls: ['./customerAccount.component.css'],
})
export class CustomerAccountComponent implements OnInit {
  message: string;
  subscription: Subscription;

  constructor(
    private data: NewCustomeServiceService,
    private newcustomerservice: NewCustomeServiceService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.subscription = this.data.currentLine.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deposit(res) {
    const modalRef = this.modalService.open(CreditCheckResultsComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = res;
  }

  approved(res) {
    const modalRef = this.modalService.open(CreditCheckResultsComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.data = res;
  }

  verifyWithQuestions(res) {
    const modalRef = this.modalService.open(CreditCheckResultsComponent, {
      size: 'xl',
    });
    modalRef.componentInstance.data = res;
  }

  noncps() {
    this.newcustomerservice.noncps().subscribe((res) => {
      switch (res.creditCheckMasterInfo.flowStatus) {
        case 'VERIFYWITHQUESTIONS':
          this.verifyWithQuestions(res.creditCheckMasterInfo);
          console.log(res.creditCheckMasterInfo)
          break;
        case 'DEPOSIT':
          this.deposit(res);
          break;
        case 'APPROOVED':
          this.approved(res);
          break;
        default:
          console.log('No such day exists!');
          break;
      }
    });
  }
}
