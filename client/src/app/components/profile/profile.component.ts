import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'msg-profile',
  template: `
    <section class="profile">
      <div class="page-header">
        <h1> {{currentUser.name}} <small>  </small></h1>
      </div>
      <ul class="list-group">
        <li class="list-group-item"> {{currentUser._id}} </li>
        <li class="list-group-item"> {{currentUser.username}} </li>
        <li class="list-group-item"> {{currentUser.email}} </li>
      </ul>
    </section>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: Object;

  constructor(private authService: AuthService) {
    this.currentUser = {};
    this.getProfile();
  }

  ngOnInit() {
  }

  getProfile(){
    this.authService.getProfile().subscribe((profile)=>{
      console.log('PROFILE: ', profile);
      this.currentUser = profile.currentUser;
    })
  }

}
