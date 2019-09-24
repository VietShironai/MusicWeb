import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }
  createUser(value){
    return this.db.collection('user-information').add({
      firstname: value.firstname,
      nameToSearch: value.firstname.toLowerCase(),
      lastname: value.lastname,
      phone: parseInt(value.phone),
      email: value.email,
    });
  }
}


