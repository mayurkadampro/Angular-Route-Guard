import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RouteGuardTuts';
  isLogin : boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.User.subscribe((data) => {
      if(data){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }

  login() {
    let data = {
      Username: "Mayur Kadam",
      Password: "HelloWorld"
    }
    this.authService.SignInUser(data);
  }

  logout() {
    this.authService.SignOutUser();
  }
}
