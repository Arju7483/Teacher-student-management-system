import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeacherModel } from '../models/teacher-model.model';
@Component({
  selector: 'app-teacher',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
  addnew:boolean = false;
  
  teacherForm : FormGroup;
  teacherList: any [];
  constructor(private fb: FormBuilder){
     this.teacherForm = this.fb.group({
    ID: [''],
    Name: [''],
    Email: [''],
    Dept: ['']
  });
  const oldData = localStorage.getItem('teacherkey');
  const parsedData: TeacherModel[] = oldData ? JSON.parse(oldData) : [];
  this.teacherList = parsedData;
  }
  onAdd(){
    this.addnew = true;
  }
  Back(){
    
    this.addnew = false;
  }
  onSubmit(){
    const oldData = localStorage.getItem('teacherkey');
    const parsedData: TeacherModel[] = oldData ? JSON.parse(oldData) : [];
    parsedData.push(this.teacherForm.value);
    this.teacherList = parsedData;
    console.log(parsedData,this.teacherList[0]);
    this.teacherForm.reset();
    localStorage.setItem('teacherkey',JSON.stringify(parsedData));
  }
}
