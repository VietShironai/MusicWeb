import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-mainweb',
  templateUrl: './mainweb.component.html',
  styleUrls: ['./mainweb.component.css']
})
export class MainwebComponent implements OnInit {

  constructor(private  userService: UserService) { }

  ngOnInit() {
  }

}
