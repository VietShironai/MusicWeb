import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private name= new BehaviorSubject(String);
currentName= this.name.asObservable();
  constructor() { }




getCurrentName(username){
    this.name.next(username);

}
}
