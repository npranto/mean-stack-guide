import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../interfaces/user-login";
import {NgForm} from "@angular/forms";
import {UserAuthFormValidationService} from "../../services/user-auth-form-validation.service";
import { FlashMessagesService } from 'angular2-flash-messages';

declare const $: any;

@Component({
  selector: 'msg-login',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Login <small></small></h1>
    </div>
    
    <div class="col-sm-12 col-md-12 col-lg-12">
        <flash-messages class="text-center col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"></flash-messages>
    </div>
    
    <div class="login-page col-sm-12 col-md-12 col-lg-12">
      <div class="form">
        <form class="login-form" (ngSubmit)="login(userLoginForm)" #userLoginForm="ngForm">
          <input 
            type="text" 
            placeholder="Username"
            id="username" 
            name="username" 
            required 
            minlength="1"
            maxlength="255"
            [(ngModel)]="user.username" 
            #username="ngModel"/>
          
          <input 
            type="password" 
            placeholder="Password"
            id="password" 
            name="password" 
            maxlength="255"
            required 
            [(ngModel)]="user.password" 
            #password="ngModel"/>
            
          <button type="submit">login</button>
          <p class="message">Not registered? 
            <a 
                [routerLink]="['/authenticate/register']" 
                [routerLinkActive]="['active']" 
                [routerLinkActiveOptions]="{exact: true}">
                Register
            </a>
          </p>
        </form>
      </div>
    </div>    


      
     
  `,
  styleUrls: ['./login.component.css', './../authenticate/authenticate.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin = {
    username: '',
    password: ''
  }

  constructor(private userAuthFormValidationService: UserAuthFormValidationService, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

  }

  login(userLoginForm: NgForm){
    if (this.validateLoginForm(this.user)){
      console.log('USER ', this.user);
    }
  }

  validateLoginForm(user: UserLogin){

    if (!this.userAuthFormValidationService.passesValidateEmptyFieldsDuringLogin(user)){
      this.flashMessagesService.show('Oops! Please fill in all the fields', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    if (!this.userAuthFormValidationService.passesValidateUsernameFormat(user.username)){
      this.flashMessagesService.show('Oops! Your username must contain only letters or numbers', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    if (!this.userAuthFormValidationService.passesValidatePasswordMinimum(user.password)){
      this.flashMessagesService.show('Oops! Your password MUST be more than 5 characters long', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    return true;
  }

}
