import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserRegister} from "../../interfaces/user-register";
import {NgForm} from "@angular/forms";
import {User} from "../../classes/user";
import {UserAuthFormValidationService} from "../../services/user-auth-form-validation.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from "../../services/auth.service";
import {Route, Router} from "@angular/router";

declare const $: any;

@Component({
  selector: 'msg-register',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Register <small></small></h1>
    </div>
    
    <div class="col-sm-12 col-md-12 col-lg-12">
        <flash-messages class="text-center col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3"></flash-messages>
    </div>
    
    <div class="col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4" [hidden]="showLoader === false">
        <msg-loading-effect></msg-loading-effect>
    </div>
             
    <div class="login-page col-sm-12 col-md-12 col-lg-12">
      <div class="form">
        <form class="register-form" (ngSubmit)="register(userRegisterForm)" #userRegisterForm="ngForm">
          <input 
            type="text" 
            placeholder="Name"
            id="name" 
            class="form-control"
            name="title" 
            required 
            minlength="1"
            maxlength="255"
            [(ngModel)]="newUser.name" 
            #name="ngModel"/>
            
          <input 
            type="text" 
            placeholder="Username"
            id="username" 
            name="username" 
            class="form-control"
            required 
            minlength="1"
            maxlength="255"
            [(ngModel)]="newUser.username" 
            #username="ngModel"/>
          
          <input 
            type="email" 
            placeholder="Email"
            id="email" 
            name="email" 
            class="form-control"
            required 
            [(ngModel)]="newUser.email" 
            #email="ngModel"/>

          <input 
            type="password" 
            placeholder="Password"
            id="password" 
            class="form-control"
            name="password" 
            maxlength="255"
            required 
            [(ngModel)]="newUser.password" 
            #password="ngModel"/>
          <button type="submit" [disabled]="showLoader === true">register</button>
          <p class="message">Already registered? 
            <a 
                [routerLink]="['/authenticate/login']" 
                [routerLinkActive]="['active']" 
                [routerLinkActiveOptions]="{exact: true}">
                login
            </a></p>
        </form>
      </div>
    </div>  

      
  `,
  styleUrls: ['./register.component.css', './../authenticate/authenticate.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  newUser: UserRegister = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  showLoader: boolean;

  constructor(
    private userAuthFormValidationService: UserAuthFormValidationService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {
    this.showLoader = false;
  }

  ngOnInit() {

  }

  register(userRegisterForm: NgForm){
    if(this.validateRegisterForm(this.newUser)){
      console.log('NEW USER: ', this.newUser);
      const newUser = new User(this.newUser.name, this.newUser.username, this.newUser.email, this.newUser.password);
      let registerUserSubs = this.authService.registerUser(newUser).subscribe((response)=>{
        console.log('NEW USER SAVED: ', response);
        this.showLoader = !this.showLoader;
        setTimeout(()=>{
          this.router.navigate(['/authenticate/login']);
          this.showLoader = !this.showLoader;
        }, 2000);
      })

    }

  }

  validateRegisterForm(newUser: UserRegister){

    if (!this.userAuthFormValidationService.passesValidateEmptyFieldsDuringRegister(newUser)){
      this.flashMessagesService.show('Oops! Please fill in all the fields', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    if (!this.userAuthFormValidationService.passesValidateUsernameFormat(newUser.username)){
      this.flashMessagesService.show('Oops! Your username must contain only letters or numbers', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    if (!this.userAuthFormValidationService.passesValidateEmailFormat(newUser.email)){
      this.flashMessagesService.show('Oops! Please enter a proper email', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    if (!this.userAuthFormValidationService.passesValidatePasswordMinimum(newUser.password)){
      this.flashMessagesService.show('Oops! Your password MUST be longer than 5 characters', { cssClass: 'alert-danger', timeout: 5000 });
      return false;
    }

    return true;
  }

  ngOnDestroy(){

  }

}
