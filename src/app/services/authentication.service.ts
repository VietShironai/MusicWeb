import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginURL = 'http://localhost:8080/api/login';
  constructor(private http: HttpClient,
              private router: Router) {  }

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
