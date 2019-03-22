import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public router: Router) {
    this.checkUser();
  }

  ngOnInit() { }

  checkUser() {
    if (localStorage.getItem('user_email')) { this.router.navigate(['/list']); }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  login() {
    localStorage.setItem('user_email', this.email.value);
    this.checkUser();
  }
}
