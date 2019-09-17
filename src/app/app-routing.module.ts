// tslint:disable-next-line:import-spacing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {SignupComponent} from './signup/signup.component';
import {IndexComponent} from './index/index.component';
import {ScreensaveComponent} from './screensave/screensave.component';
import {UserInfomationComponent} from "./user-infomation/user-infomation.component";

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component : SignupComponent},
  {path: 'index', component: IndexComponent},
  {path: '', component: IndexComponent},
  {path:'userinfomation', component: UserInfomationComponent},
  {path:'screensaver',component: ScreensaveComponent}]


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
