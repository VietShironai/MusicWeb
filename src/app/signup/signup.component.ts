import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform :FormGroup
  constructor(private router: Router,
              private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.signupform = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      numberphone: ['', [Validators.required, Validators.maxLength(11),Validators.pattern('(09|01[2|6|8|9])+([0-9]{8})\\b')]]
    });
  }

  signup() {

  }
}
