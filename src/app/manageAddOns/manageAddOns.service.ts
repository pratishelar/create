import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageAddOnsService {
  constructor(private http: HttpClient) {}

  public getAddons(): Observable<any> {
    const url = 'assets/mock/addons/geteligibleaddonsfeatures.json';
    return this.http.get<any>(url);
  }
}
