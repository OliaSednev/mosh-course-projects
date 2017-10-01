import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'reactive-form-signup-form',
  templateUrl: './reactive-form-signup-form.component.html',
  styleUrls: ['./reactive-form-signup-form.component.css']
})
export class ReactiveFormSignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
  });

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}


// if we have server and service name: authService. it will look like this:

// login() {
// let isValid = authService.login(this.form.value);
// if (!isValid) {
// this.form.setErrors({
//   invalidLogin: true
// });
// }}
