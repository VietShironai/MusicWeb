import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {CustomMaterialModule} from './core/material.module';

import {SignupComponent} from './signup/signup.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import {IndexComponent} from './index/index.component';

import {ScreensaveComponent} from './screensave/screensave.component';

import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {HttpInterceptor} from "@angular/common/http";
import {BasicAuthHtppInterceptorServiceService} from "./basic-auth-htpp-interceptor-service.service";
import { UserInfomationComponent } from './user-infomation/user-infomation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
    IndexComponent,
    ScreensaveComponent,
    UserInfomationComponent,
    UserInfomationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatPasswordStrengthModule,

  ],
  providers: [
    Validators,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthHtppInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
