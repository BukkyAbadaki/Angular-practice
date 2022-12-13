import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [RegisterService],
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  };

  constructor(private registerService: RegisterService) {}
  registerAUser() {
    const { firstName, lastName, email, password, phoneNumber } = this.user;
    console.log('click');
    this.registerService
      .register({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
