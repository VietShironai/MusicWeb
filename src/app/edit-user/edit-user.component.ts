import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edit_userform: any;

  constructor(private firebaseService: FirebaseService,
  private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {this.createForm()
  }
  onSubmit(value){
    this.firebaseService.createUser(value)
      .then(
        res => {
          this.router.navigate(['userinfo']);
        }
      )
  }
  createForm() {
    this.edit_userform = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      phone: ['', Validators.required ],
      email:['', Validators.required ],
      city: ['', Validators.required ],
      state: ['', Validators.required ]
    });
  }

}
