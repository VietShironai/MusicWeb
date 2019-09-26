import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const  idToken= sessionStorage.getItem('token');
    if (idToken){
      const cloned= req.clone({
        headers: req.headers.set("Authorization", idToken)
      });
      return next.handle(cloned)
    }else {
      return next.handle(req);
    }


  }

}
