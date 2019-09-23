import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization : sessionStorage.getItem('token')
        }
      });
      console.log("add token to header: re"+ req); // de xem no co chay den chuc nang nay hay ko

    }else {
      console.log("k the add dx token");      // xem no dang chay den doan nao de suy doan
    }

    return next.handle(req);
  }
}
