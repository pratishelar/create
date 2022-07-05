import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchCustomerService } from '../searchCustomer/searchCustomer.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmCustomerResolver implements Resolve<any> {
  constructor(private searchCustomer: SearchCustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.searchCustomer.getcustomer().pipe(
      map((res) => res),
      catchError((err) => Observable.throw(err.json().error))
    );
  }
}
