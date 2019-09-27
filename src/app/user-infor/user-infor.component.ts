import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import {AbstractControl, Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.css']
})
export class UserInforComponent implements OnInit {
user:Partial<User>;
status= true;
  update_passwordForm: FormGroup;
  password: String;
  confirmPassword: String;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private routerlink: Router,
              private fb: FormBuilder,
              private authService: AuthenticationService) { }

  ngOnInit(){
    const id = sessionStorage.getItem('id');
    // @ts-ignore
    this.userService.getUserById(id).subscribe(data=> this.user= data)
    ;
    this.update_passwordForm= this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]]



  },{validator: this.comparePassword})}

  edit() {
    this.routerlink.navigate(['edit-info'])
  }

  updatePassword() {
const id= sessionStorage.getItem('id');
    const {value} = this.update_passwordForm

   ;
      const data= {
        ...this.user, ...value
      }
    console.log(this.user);
      // @ts-ignore
      this.userService.updateUser(id,data).subscribe(
        next => {
          alert('Mật khẩu thay đổi thành công');
         this.authService.logOut();
        },
        error => console.log(error)
      );
    }
  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
  }
  }
