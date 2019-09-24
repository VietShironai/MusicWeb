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

import {ScreensaveComponent} from './screensave/screensave.component';

import {MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {SonginfoComponent} from './songinfo/songinfo.component';
import {MainwebComponent} from './mainweb/mainweb.component';
import {MatSelectModule} from '@angular/material';
import {FooterComponent} from './footer/footer.component';
import {environment} from '../environments/environment';
import {UserInforComponent} from './user-infor/user-infor.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
    IndexComponent,
    ScreensaveComponent,
    SonginfoComponent,
    MainwebComponent,
    FooterComponent,
    UserInforComponent
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
    MatSelectModule,
   AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [Validators, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
