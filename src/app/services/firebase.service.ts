import { Injectable } from '@angular/core';
import {FirebaseDatabase, FirebaseFirestore} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  createUser(value: any) {
    return this.db.collection('user-information').add({
      firstname: value.firstname,
      lastname: value.lastname,
      nameToSearch: value.name.toLowerCase(),
      email: parseInt(value.email),
      phone: value.phone,
    });

  }
}
