import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // @ts-ignore
  newUser = new User('ngobaoviet230@gmail.com', 'Viet', ' vietsinh', '1');
submitted = false;
onsubmit() {
  this.submitted = true;
}
  constructor() { }

  ngOnInit() {
  }

}
