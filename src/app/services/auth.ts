import { Injectable } from '@angular/core';
import { Signup } from '../signup/signup';
@Injectable({
  providedIn: 'root'
})
export class Auth {
  signup(user: any){
    const data = JSON.stringify(user);
    localStorage.setItem('credintial',data);//bug
    console.log(user);
    alert("signUp successfull");
  }
  login(user: any): boolean{
  const oldData = localStorage.getItem('credintial'); 
  console.log(oldData,'olddata');
  const parseData = JSON.parse(oldData || '{}');
  
  const isValid = parseData.username === user.username && parseData.password === user.password;
  return isValid;
  }
  
  constructor() { }

}


