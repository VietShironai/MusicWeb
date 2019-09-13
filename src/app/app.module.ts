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
import {HttpClientModule} from '@angular/common/http';
import {IndexComponent} from './index/index.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ScreensaveComponent } from './screensave/screensave.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
    IndexComponent,
    ScreensaveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Validators],
  bootstrap: [AppComponent]
})
export class AppModule {
}
