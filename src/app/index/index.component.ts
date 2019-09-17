import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
  }
logout(){
    this.authService.logOut()
}
currentUser(){
     return this.userService.getUsers()

}
}
