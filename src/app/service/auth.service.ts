import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User = new BehaviorSubject<any>(null);

  constructor() { }

  public get UserSubjectValue() {
    if (this.User) {
      return this.User.value;
    } else {
      return null
    }
  }

  SignInUser(data){
    this.User.next(data);
  }

  SignOutUser(){
    this.User.next(null);
  }

}
