import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) {

  }
  getUsers(count = 10): Observable<User[]> {
    return this.http.get<User[]>(this.userURL).pipe(map(response => response.filter((post, i) => i < count)));
  }
  createUser(user: Partial<User>) {
    return this.http.post<User>(this.userURL, user);
  }
}
