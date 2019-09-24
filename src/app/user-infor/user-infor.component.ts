import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
user:User;
username= sessionStorage.getItem('username');

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private routerlink: Router) { }

  ngOnInit(){

  }

  edit() {
    this.routerlink.navigate(['edit-user'])
  }
}
