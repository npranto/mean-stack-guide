import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-login',
  template: `

    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center"> Login <small></small></h1>
    </div>
    
    <div class="login-page col-sm-12 col-md-12 col-lg-12">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? <a>Create an account</a></p>
        </form>
      </div>
    </div>    


      
     
  `,
  styleUrls: ['./login.component.css', './../authenticate/authenticate.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
