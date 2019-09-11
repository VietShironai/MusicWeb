import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = 'http:localhost:8080/user/';
  constructor(private http: HttpClient) {

  }
  getUsers(count = 10): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userURL).pipe(map(response => response.filter((post, i) => i < count)));
  }
  createUser(user: Partial<IUser>) {
    return this.http.post<IUser>(this.userURL, user);
  }
}
