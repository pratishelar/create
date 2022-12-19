import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoaderService } from './_service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'create';
  isLoading$: Observable<boolean>;

  constructor(private loader: LoaderService, private http: HttpClient) {}

  ngOnInit(){
    this.isLoading$ = this.loader.isLoading$;
  }
}
