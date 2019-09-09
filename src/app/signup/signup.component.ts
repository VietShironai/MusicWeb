import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IUser} from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList: IUser[] = [];
  userForm: FormGroup;
  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder

  ) { }
  ngOnInit() {
    this.userForm = this.fb.group({
      user: '',
      password: '',
      email: ''
    });
    this.userService.getUsers().subscribe(data => (this.userList = data), error => console.log(error));
  }

  signup() {
    if (this.userForm.valid) {
      const {value} = this.userForm;
      this.userService.createUser(value).subscribe(data => {
        this.userList.unshift(data);
        this.userForm.reset({
          user: '',
          password: '',
          email: ''
        });
      }, error => console.log(error));
    }
  }
}
