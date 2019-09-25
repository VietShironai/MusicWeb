// tslint:disable-next-line:import-spacing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {IndexComponent} from './index/index.component';
import {ScreensaveComponent} from './screensave/screensave.component';
import {SonginfoComponent} from './songinfo/songinfo.component';
import {MainwebComponent} from './mainweb/mainweb.component';
import {UserInforComponent} from './user-infor/user-infor.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {ListSongComponent} from './list-song/list-song.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'index', component: IndexComponent},
  {path: '', component: MainwebComponent},
  {path:'userinfo', component: UserInforComponent},

  {path: 'screensaver', component: ScreensaveComponent},
  {path: 'createsong', component: SonginfoComponent},
  {path: 'listsong', component: ListSongComponent},
  {path:'edit-user', component: EditUserComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
