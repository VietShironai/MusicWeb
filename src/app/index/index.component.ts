import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import {BasicAuthHtppInterceptorServiceService} from '../services/basic-auth-htpp-interceptor-service.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  private currentName;
  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private  interceptor: BasicAuthHtppInterceptorServiceService,
              private data: DataService) { }

  ngOnInit() {
  }
logout(){
    this.authService.logOut();

}
setUsername(){
 return  this.data.currentName.subscribe(username=>this.currentName= username);

}
}

