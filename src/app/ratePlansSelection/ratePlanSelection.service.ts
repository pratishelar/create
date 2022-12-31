import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatePlanSelectionService {
  constructor(private http: HttpClient) {}

  public getRatePlans(): Observable<any> {
    const url = 'assets/mock/ratePlans/getRateplans.json';
    return this.http.get<any>(url);
  }
}
