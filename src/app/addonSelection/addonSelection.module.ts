import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddonSelectionComponent } from './addonSelection.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../_shared/shared.module";

@NgModule({
    declarations: [AddonSelectionComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: AddonSelectionComponent },
        ]),
        CommonModule,
        SharedModule
    ]
})
export class AddonSelectionModule { }
