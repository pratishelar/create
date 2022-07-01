import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchCustomerComponent } from './searchCustomer/searchCustomer.component';
import { NewCustomerModule } from './newCustomer/newCustomerModule.module';
import { NewCustomerComponent } from './newCustomer/newCustomer.component';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './pageLoader/pageLoader.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './_interceptor/loader.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmCustomerComponent } from './confirmCustomer/confirmCustomer.component';
import { ConfirmCustomerResolver } from './_resolver/confirm-customer.resolver';
import { PhoneNumberDirective } from './_directive/phoneNumber.directive';
import { SharedModule } from './_shared/shared.module';
import { SideCartPanelComponent } from './sideCartPanel/sideCartPanel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchCustomerComponent,
    NewCustomerComponent,
    PageLoaderComponent,
    ConfirmCustomerComponent,
    SideCartPanelComponent,
  ],
  imports: [
    BrowserModule,
    NewCustomerModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ConfirmCustomerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
