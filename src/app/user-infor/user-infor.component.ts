import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
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
              private route: ActivatedRoute) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(userdata => (this.user = userdata),
      error => {
        console.log(error);
        this.user = null;
      }
    );
  }

}
