import { Injectable } from '@angular/core';
import { Signup } from '../signup/signup';
@Injectable({
  providedIn: 'root'
})
export class Userinfo {
  signup(user: any){
    localStorage.setItem('credintial',user);
  }
  login(user: any): boolean{
  const oldData = localStorage.getItem('credintial');
  const parseData = JSON.parse(oldData || '');
  const isValid = parseData.username === user.username && parseData.password === user.password;
    return isValid;
  }
  
  constructor() { }
}

