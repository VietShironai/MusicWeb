import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {setClassMetadata} from '@angular/core/src/r3_symbols';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private sercurityURL = 'http://localhost:8080/api/login';
  constructor(private httpClient: HttpClient ) {  }
  // authenticate(username, password) {
  //   return this.httpClient.post<any>(this.sercurityURL, {username, password}).pipe(map(userData => {
  //     sessionStorage.setItem('username', username);
  //     const tokenStr = 'Bearer' + userData.token;
  //     sessionStorage.setItem('token', tokenStr);
  //     return userData;
  //   }));
  //
  //
  // }
  isUserLogin() {
    const user = sessionStorage.getItem('username');
    return !(user == null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
