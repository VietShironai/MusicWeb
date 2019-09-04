import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: any;
  password: any;
  numberphone: any;
  signupForm: any;

  constructor(private router: Router) { }
  ngOnInit() {
  }

  signup() {

  }
}
