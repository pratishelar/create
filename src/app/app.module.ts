import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './_interceptor/loader.interceptor';
import { ConfirmCustomerResolver } from './_resolver/confirm-customer.resolver';
import { SharedModule } from './_shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorInterceptor } from './_interceptor/error.interceptoor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ConfirmCustomerResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
