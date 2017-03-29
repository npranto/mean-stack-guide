import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class AuthStatusService {

  authStatus: string;
  requestAuthStatusUpdate: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  setAuthStatus(lang) {
    this.requestAuthStatusUpdate.emit(this.authStatus);
  }

  getAuthStatus() {
    return this.authStatus;
  }

}
