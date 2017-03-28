import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-register',
  template: `
      <form class="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p class="message">Already registered? <a>Sign In</a></p>
      </form>
  `,
  styleUrls: ['./register.component.css', './../authenticate/authenticate.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
