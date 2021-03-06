import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {rootRoutes} from './app.routing';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import {UserAuthFormValidationService} from "./services/user-auth-form-validation.service";
import {AuthService} from "./services/auth.service";
import { LoadingEffectComponent } from './components/loading-effect/loading-effect.component';
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthenticateComponent,
    LoadingEffectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    rootRoutes,
    FlashMessagesModule
  ],
  providers: [
    UserAuthFormValidationService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
