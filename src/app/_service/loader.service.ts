import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}
  private isLoading = new BehaviorSubject<boolean>(false)
  isLoading$: Observable<boolean> = this.isLoading.asObservable()

  setSpinner(bool: boolean) {
    this.isLoading.next(bool);
  }
}
