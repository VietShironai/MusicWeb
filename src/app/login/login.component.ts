import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {UserService} from '../service/user.service';
import {log} from "util";
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

  login(): void {
    this.userService.authenticate(this.username, this.password) .subscribe(data => {
      // @ts-ignore
      if(data && data.code == 200){
        console.log('Login success with token', sessionStorage.getItem('token'), sessionStorage.getItem('role'));
this.router.navigate([''])
      }
    });

  }
}
