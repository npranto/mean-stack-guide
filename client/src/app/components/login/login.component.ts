import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-login',
  template: `

      <form class="login-form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>login</button>
        <p class="message">Not registered? <a>Create an account</a></p>
      </form>
     
  `,
  styleUrls: ['./login.component.css', './../authenticate/authenticate.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
