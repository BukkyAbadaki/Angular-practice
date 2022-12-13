import { Component } from '@angular/core';
import { LoginService, Params } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private loginService: LoginService) {}
  loginAUser(email: string, password: string) {
    console.log('click');
    this.loginService.login({ email, password }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
      
    );
  }
}
