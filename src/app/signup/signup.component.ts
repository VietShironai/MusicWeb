import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userList: User[] = [];
  signupform: FormGroup;

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signupform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      numberphone: ['', [Validators.required, Validators.pattern('(09|01[2|6|8|9])+([0-9]{8})\\b')]]
    });
    this.userService.getUsers().subscribe(data => (this.userList = data), error => console.log(error));
  }

  signup() {
    if (this.signupform.valid) {
      const {value} = this.signupform;
      this.userService.createUser(value).subscribe(data => {
        this.userList.unshift(data);
        this.signupform.reset({
          username: '',
          password: '',
          email: ''
        });
      }, error => console.log(error));
      this.router.navigate(['screensaver']);

    }
  }
}
