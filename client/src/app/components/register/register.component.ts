import { Component, OnInit } from '@angular/core';
import {UserRegister} from "../../interfaces/user-register";
import {NgForm} from "@angular/forms";

declare const $: any;

@Component({
  selector: 'msg-register',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Register <small></small></h1>
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
            pattern="[a-z0-9!#$%&'*+/=?^_'{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_'{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            required 
            [(ngModel)]="newUser.email" 
            #email="ngModel"/>

          <input 
            type="password" 
            placeholder="Password"
            id="password" 
            class="form-control"
            name="password" 
            minlength="6"
            maxlength="255"
            required 
            [(ngModel)]="newUser.password" 
            #password="ngModel"/>
          <button type="submit">register</button>
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
export class RegisterComponent implements OnInit {

  newUser: UserRegister = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  constructor() {

  }

  ngOnInit() {

  }

  register(userRegisterForm: NgForm){
    console.log(userRegisterForm.value);
  }

}
