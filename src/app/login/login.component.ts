import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';

// import {TokenStorage}
;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router,
              private userService: UserService,
              // private token: TokenStorage
  ) {
  }



  ngOnInit() {
  }

  login():  void {
    this.userService.authenticate(this.username, this.password) .subscribe(data => {
      // @ts-ignore
      if(data && data.code == 200){
        this.userService.isLoggedIn.next(sessionStorage.getItem('username'));
        console.log('Login success with token', sessionStorage.getItem('token'), sessionStorage.getItem('role'));
        this.router.navigate([''])
      }
    });


  }

}
