import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private authService: Auth, private router: Router){
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
  onSubmit(){
    console.log(this.loginForm.value,'loincredidjlfjdslfs');
    if(this.loginForm.valid){
      if(this.authService.login(this.loginForm.value)){
        this.router.navigate(['/home']);
      }
      else alert("wrong credintial");
    }
  }
  Back(){
    this.router.navigate(['/'])
  }
}
