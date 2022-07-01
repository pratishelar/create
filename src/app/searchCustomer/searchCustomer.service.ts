import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCustomerService {
  constructor(private http: HttpClient) {}

  public getcustomer(): Observable<any> {
    const url = 'assets/mock/customerSearch.json';
    return this.http.get<any>(url);
  }
}
