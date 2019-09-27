import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edit_userform: FormGroup;
  user: Partial<User>;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm()
    const id= sessionStorage.getItem('id');

    // @ts-ignore
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
    });
    // @ts-ignore
  }


  createForm() {
    this.edit_userform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.edit_userform.valid) {
      const id = sessionStorage.getItem('id');
      const {value} = this.edit_userform;
      const data={
        ...this.user, ...value
      }
      // @ts-ignore


      // @ts-ignore
      this.userService.updateUser(id,data).subscribe(
        next => {
          this.router.navigate(['userinfo']);
        },
        error => console.log(error)
      );
    }
  }


}
