import { Injectable } from '@angular/core';
import {UserRegister} from "../interfaces/user-register";
import {UserLogin} from "../interfaces/user-login";

@Injectable()
export class UserAuthFormValidationService {

  constructor() { }

  passesValidateEmptyFieldsDuringRegister(newUser: UserRegister){
    if (newUser.name.length > 0 &&
        newUser.username.length > 0 &&
        newUser.email.length > 0 &&
        newUser.password.length > 0){
      return true;
    }
    return false;
  }

  passesValidateEmptyFieldsDuringLogin(user: UserLogin){
    if (user.email.length > 0 &&
        user.password.length > 0){
        return true;
    }
    return false;
  }

  passesValidateEmailFormat(email: string){
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailRegex.test(email)){
      return true;
    }
    return false;
  }

  passesValidatePasswordMinimum(password: string) {
    return password.length > 5;
  }

  passesValidateUsernameFormat(username: string){
    return /^[A-Za-z0-9_]+$/.test(username);
  }
}
