import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  private currentName= sessionStorage.getItem('username');

  constructor(private authService: AuthenticationService,
              private userService: UserService,
              ) {
  }

  ngOnInit() {
  };

  logout()
  {
    this.authService.logOut();
  }
}




