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
    const user = sessionStorage.getItem('username');
    return !(user == null);
  }
  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigate([''])
  }
  logedIn(){
    return !!sessionStorage.getItem('token')
  }
  getToken(){
    return sessionStorage.getItem('token')
  }
  loginUser(user){
    return this.http.post<any>(this.loginURL,user)
  }
}
