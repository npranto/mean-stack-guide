import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import {UserLogin} from "../interfaces/user-login";
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  domain: string = 'http://localhost:9999';
  authToken: string;
  currentUser: Object;

  constructor(private http: Http) {

  }

  loggedIn() {
    return tokenNotExpired();
  }

  registerUser(newUser: User){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(`${this.domain}/api/user/register`, newUser, new RequestOptions({headers: headers}))
      .map((response)=>{
        return response.json();
      })

  }

  authenticateUser(user: UserLogin){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http
      .post(`${this.domain}/api/user/authenticate`, user, new RequestOptions({headers: headers}))
      .map((response)=>{
        return response.json();
      })
  }

  getProfile(){
    const headers = new Headers({
      'Authorization': localStorage.getItem('id_token')
    });
    return this.http
      .get(`${this.domain}/api/user/profile`, new RequestOptions({headers: headers}))
      .map((response)=>{
        return response.json();
      })
  }

  storeCurrentUserInfo(token: string, currentUser: Object){
    localStorage.setItem('id_token', token);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.authToken = token;
    this.currentUser = currentUser;
  }

  logoutUser(){
    this.authToken = null;
    this.currentUser = null;
    localStorage.clear();
  }


}
