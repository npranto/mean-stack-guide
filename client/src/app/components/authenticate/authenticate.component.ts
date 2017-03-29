import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, RouterOutlet, RouterLinkActive, Router} from "@angular/router";

declare const $: any;

@Component({
  selector: 'msg-authenticate',
  template: `
   
    <router-outlet></router-outlet>
    
  `,
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }

  ngOnInit() {

  }



  ngOnChanges(){
    console.log(this.router.url);
  }

}
