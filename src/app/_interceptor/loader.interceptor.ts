import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { finalize, delay } from 'rxjs/operators';
import { LoaderService } from '../_service/loader.service';
@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loader.show();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => this.loader.hide())
    );
  }
}
