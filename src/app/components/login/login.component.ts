import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('openCloseInputText', [
      state('login', style({
        height: '0px',
        'margin-bottom': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
        'border-top-width': '0px',
        'border-bottom-width': '0px',
        overflow: 'hidden'
      })),
      state('signup', style({
        height: '*',
        'margin-bottom': '*',
        'padding-top': '*',
        'padding-bottom': '*',
        'border-top-width': '*',
        'border-bottom-width': '*',
      })),
      transition('login => signup', [
        animate('0.5s ease')
      ]),
      transition("signup => login", [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  isInLoginState: boolean;
  loginFormGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.loginFormGroup = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
      password_confirm: ''
    });
  }

  ngOnInit(): void {
    if(this.router.url.includes("login")) {
      this.isInLoginState = true;
    } else {
      this.isInLoginState = false;
    }
  }

  toggleFormState(): void {
    this.isInLoginState = !this.isInLoginState;
  }

  formSubmit(formData: any): void {
    if(this.isInLoginState) {
      this.login(formData);
    } else {
      this.signUp(formData);
    }
  }

  login(formData: any): void {
    console.log("Login");
  }

  signUp(formData: any): void {
    console.log("Signup");
  }
}
