import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../../interfaces/user-login";
import {NgForm} from "@angular/forms";

declare const $: any;

@Component({
  selector: 'msg-login',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Login <small></small></h1>
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
            [(ngModel)]="newUser.username" 
            #username="ngModel"/>
          
          <input 
            type="password" 
            placeholder="Password"
            id="password" 
            name="password" 
            minlength="6"
            maxlength="255"
            required 
            [(ngModel)]="newUser.password" 
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

  newUser: UserLogin = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {

  }

  login(userLoginForm: NgForm){
    console.log(userLoginForm.value);
  }

}
