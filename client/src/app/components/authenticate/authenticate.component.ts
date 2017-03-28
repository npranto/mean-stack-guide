import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'msg-authenticate',
  template: `
   
    <div class="page-header col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
      <h1 class="text-center">  <small></small></h1>
    </div>
    
    <div class="login-page col-sm-12 col-md-12 col-lg-12">
      <div class="form">
        <router-outlet></router-outlet>
      </div>
    </div>
    
  `,
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  authType: {

  }

  constructor() { }

  ngOnInit() {
  }

}
