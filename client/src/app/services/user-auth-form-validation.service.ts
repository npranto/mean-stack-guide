import { Injectable } from '@angular/core';
import {UserRegister} from "../interfaces/user-register";

@Injectable()
export class UserAuthFormValidationService {

  constructor() { }

  validateRegisterForm(newUser: UserRegister){
    if (!this.passesValidateEmptyFields(newUser)){
      console.log('Oops! Please fill in all the fields')
    }

    if (!this.passesValidateEmailFormat(newUser.email)){
      console.log('Oops! Please enter a proper email')
    }

    if (!this.passesValidatePasswordMinimum(newUser.password)){
      console.log('Oops! Your password MUST be more than 5 characters long')
    }

    if (!this.passesValidateUsernameFormat(newUser.username)){
      console.log('Oops! Your username must contain only letters or numbers');
    }
  }

  passesValidateEmptyFields(newUser: UserRegister){
    if (newUser.name.length > 0 &&
        newUser.username.length > 0 &&
        newUser.email.length > 0 &&
        newUser.password.length > 0){
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
