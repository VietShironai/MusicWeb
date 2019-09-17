import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {setClassMetadata} from '@angular/core/src/r3_symbols';
import {Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginURL = 'http://localhost:8080/api/login';
  constructor(private http: HttpClient,
              private router: Router) {  }
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
    const user = localStorage.getItem('username');
    return !(user == null);
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
  logedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  loginUser(user){
    return this.http.post<any>(this.loginURL,user)
  }
}
