import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs';
import {UserLogin} from "../interfaces/user-login";

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  getHeadersOptions(){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return new RequestOptions({headers: headers});
  }

  registerUser(newUser: User){
    return this.http
      .post('http://localhost:9999/api/user/register', newUser, this.getHeadersOptions())
      .map((response)=>{
        return response.json();
      })

  }

  authenticateUser(user: UserLogin){
    return this.http
      .post('http://localhost:9999/api/user/authenticate', user, this.getHeadersOptions())
      .map((response)=>{
        return response.json();
      })
  }



}
