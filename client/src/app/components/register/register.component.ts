import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-register',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Register <small></small></h1>
    </div>
    
    <div class="login-page col-sm-12 col-md-12 col-lg-12">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>
          <button>create</button>
          <p class="message">Already registered? <a>Sign In</a></p>
        </form>
      </div>
    </div>  

      
  `,
  styleUrls: ['./register.component.css', './../authenticate/authenticate.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
