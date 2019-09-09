import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = 'localhost:8080/user/';
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userURL);
  }
}
