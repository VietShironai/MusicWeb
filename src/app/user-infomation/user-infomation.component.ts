import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {error} from "util";

@Component({
  selector: 'app-user-infomation',
  templateUrl: './user-infomation.component.html',
  styleUrls: ['./user-infomation.component.css']
})
export class UserInfomationComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(userdata => (this.user = userdata),
      error => {
        console.log(error);
        this.user = null;
      }
    );
  }


}
