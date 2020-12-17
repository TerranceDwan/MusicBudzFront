import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseModal } from 'src/app/utility/response-modal';

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
        'border-color': 'white',
        overflow: 'hidden'
      })),
      state('signup', style({
        height: '*',
        'margin-bottom': '*',
        'padding-top': '*',
        'padding-bottom': '*',
        'border-top-width': '*',
        'border-bottom-width': '*',
        'border-color': '#999999'
      })),
      transition('login => signup', [
        animate('0.5s ease')
      ]),
      transition('signup => login', [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  isInLoginState: boolean;
  loginFormGroup: FormGroup;
  activeModal: ResponseModal;

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

    this.activeModal = null;
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
    if(formData.username == '' && formData.password == '') {
      this.activeModal = new ResponseModal(false, "Please enter your username and password.");
    } else if(formData.username == '') {
      this.activeModal = new ResponseModal(false, "Please enter your username.");
    } else if(formData.password == '') {
      this.activeModal = new ResponseModal(false, "Please enter your password.");
    } else {
      // TODO fill once services are implemented.
      this.activeModal = new ResponseModal(true, "Success (so far).");
    } 
  }

  signUp(formData: any): void {
    if(formData.username == '') {
      this.activeModal = new ResponseModal(false, "Please enter your requested username.");
    } else if(formData.email == '') {
      this.activeModal = new ResponseModal(false, "Please enter your requested email address.");
    } else if(formData.password == '') {
      this.activeModal = new ResponseModal(false, "Please enter your requested password.");
    } else if(formData.password_confirm == '') {
      this.activeModal = new ResponseModal(false, "Please confirm your requested password.");
    } else if(formData.password != formData.password_confirm) {
      this.activeModal = new ResponseModal(false, "Your passwords do not match.");
    } else {
      // TODO fill once services are implemented.
      this.activeModal = new ResponseModal(true, "Success (so far).");
    }
  }
}
