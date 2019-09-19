import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private sercurityURL = 'http://localhost:8080/api/login';
  private userURL = 'http://localhost:8080/api/user';
  public isLoggedIn = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getUsers(count = 10): Observable<User[]> {
    return this.http.get<User[]>(this.userURL).pipe(map(response => response.filter((post, i) => i < count)));
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>(this.userURL, user);
  }

  authenticate(username, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    try{
      return this.http.post(this.sercurityURL, {username:username, password: password}, httpOptions).pipe(map(userData => {
        console.log(userData);
        localStorage.setItem('username', username);
        // @ts-ignore
        const tokenStr = userData.tokenType + ' ' + userData.accessToken;
        localStorage.setItem('token', tokenStr);
        // @ts-ignore
        localStorage.setItem('role', userData.roles[0].authority)
        return userData;
      }));
    }catch (e) {
      console.log('ERR', e);
    }

  }

  logOut() {
    localStorage.removeItem('token');
  }
  getUser():Observable<any>{
    return this.http.get<any>(`${this.userURL + '/Current'}`);
  }

}
