import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlyCharDirective } from '../_directive/onlyChar.directive';
import { PhoneNumberDirective } from '../_directive/phoneNumber.directive';
import { PageLoaderComponent } from './pageLoader/pageLoader.component';
import { SideCartPanelComponent } from './sideCartPanel/sideCartPanel.component';

@NgModule({
  declarations: [
    OnlyCharDirective,
    PhoneNumberDirective,
    PageLoaderComponent,
    SideCartPanelComponent,
  ],
  imports: [CommonModule],
  exports: [
    OnlyCharDirective,
    PhoneNumberDirective,
    PageLoaderComponent,
    SideCartPanelComponent,
  ],
})
export class SharedModule {}
