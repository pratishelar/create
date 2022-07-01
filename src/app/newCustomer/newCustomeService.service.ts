import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewCustomeServiceService {

  private lineType = new BehaviorSubject('postpaid');
  currentLine = this.lineType.asObservable();

  constructor(private http: HttpClient) {}

  changeLineType(line: string) {
    this.lineType.next(line);
    console.log(this.lineType.value);
  }

  public noncps(): Observable<any> {
    const url = 'assets/mock/creditcheck/noncpsVerifyAnswer.json';
    return this.http.get<any>(url);
  }
}
