import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { CustomerDetailsComponent } from "./customerDetails/customerDetails.component";
import { AccountDetailsComponent } from "./accountDetails/accountDetails.component";
import { ServiceOverviewComponent } from "./serviceOverview/serviceOverview.component";

@NgModule({
    declarations: [SummaryComponent, CustomerDetailsComponent, AccountDetailsComponent, ServiceOverviewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: SummaryComponent },
        ]),
        SharedModule,
        
    ]
})
export class SummaryModule { }
