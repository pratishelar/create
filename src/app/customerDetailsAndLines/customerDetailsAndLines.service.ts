import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsAndLinesService {
  private url ="./assets/mock/linesAndDevices/";

  constructor(private http: HttpClient) {}

  getCustomerByAccountNumber() {
    return this.http.get(this.url+'getCustomerByAccountNumber.json');
  }

  getServicesByContactId() {
    return this.http.get(this.url+'getServicesByContactId.json');
  }
}
