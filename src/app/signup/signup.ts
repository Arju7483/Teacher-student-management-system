import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';
@Component({
  selector: 'app-signup',
  imports: [ CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  signupForm : FormGroup;
  constructor(private fb: FormBuilder, private authService: Auth, private router: Router){
    this.signupForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
 onSubmit(){
  if(this.signupForm.valid){
    this.authService.signup(this.signupForm.value);
    this.router.navigate(['']);
  }
 }
   Back(){
    this.router.navigate(['/'])
  }
}
