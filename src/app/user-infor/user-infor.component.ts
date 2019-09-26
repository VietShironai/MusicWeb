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
user:Partial<User>;
new_password1: String;
new_password2: String;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private routerlink: Router) { }

  ngOnInit(){
    const id = sessionStorage.getItem('id');
    // @ts-ignore
    this.userService.getUserById(id).subscribe(data=> this.user= data)


    ;

  }

  edit() {
    this.routerlink.navigate(['edit-info'])
  }

  updatePassword() {


  }
}
