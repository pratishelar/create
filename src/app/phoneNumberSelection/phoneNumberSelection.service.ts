import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberSelectionService {

  constructor(private http: HttpClient) {}

  public getTelephoneNumbers(): Observable<any> {
    const url = 'assets/mock/telephonenumberlist/telephonenumberlist.json';
    return this.http.get<any>(url);
  }

}
