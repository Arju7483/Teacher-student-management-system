import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentDataService } from '../student-data-service';
import { Home } from '../home/home';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-student',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  addnew:boolean = false;
  studentKey  = 'students';
  studentForm : FormGroup;
  studentList: any [];
  constructor(private fb: FormBuilder,private instanceOfStudentService: StudentDataService){
     this.studentForm = this.fb.group({
    ID: ['',Validators.required],
    Name: ['',Validators.required],
    Email: ['',Validators.required]
  });
  const oldData = localStorage.getItem('studentskey');
  const parsedData: Student[] = oldData ? JSON.parse(oldData) : [];
  this.studentList = parsedData;
  }
  onAdd(){
    this.addnew = true;
  }
  Back(){
    
    this.addnew = false;
  }
  onSubmit(){
    if(this.studentForm.valid){
    const oldData = localStorage.getItem('studentskey');
    const parsedData: Student[] = oldData ? JSON.parse(oldData) : [];
    parsedData.push(this.studentForm.value);
    this.studentList = parsedData;
    console.log(this.studentList);
    this.studentForm.reset();
    localStorage.setItem('studentskey',JSON.stringify(parsedData));
  }
}
}
