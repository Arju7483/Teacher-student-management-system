import { Component } from '@angular/core';
import { StudentModel } from '../models/student-model.model';
import { StudentDataService } from '../student-data-service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-teacher',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './all-teacher.html',
  styleUrl: './all-teacher.css'
})
export class AllTeacher {
  studentList : StudentModel[] = [];
  isUpdate: boolean = false;
  updateStudentForm : FormGroup;
  constructor(private fb: FormBuilder){
  // this.studentList = this.studentService.getStudentList();
  
  // console.log('hey: ',this.studentList);
    this.updateStudentForm = this.fb.group({
    ID: [''],
    Name: [''],
    Email: ['']
  });
    const oldData = localStorage.getItem('studentskey');
    const parsedData: StudentModel[] = oldData ? JSON.parse(oldData) : [];
    this.studentList = parsedData;
  }
  onEdit(currentStudent:StudentModel){
    this.isUpdate = true;
    this.updateStudentForm.patchValue({
    ID: currentStudent.ID,
    Name: currentStudent.Name,
    Email: currentStudent.Email
  });
  }
  Save(){
    const currentStudent = this.updateStudentForm.value;
    const oldData = localStorage.getItem('studentskey');
    const parsedData: StudentModel[] = oldData ? JSON.parse(oldData) : [];
    this.studentList = parsedData;
    const editIndex = this.studentList.findIndex(s=>s.ID === currentStudent.ID);
    this.studentList[editIndex] = currentStudent;
    console.log(this.studentList);
    localStorage.setItem('studentskey',JSON.stringify(parsedData));
    this.isUpdate = false;
  }
  Back(){
    this.isUpdate = false;
  }
  onDelete(id: number){
    const deleteIndex = this.studentList.findIndex(s=>s.ID === id);
    if(deleteIndex !== -1){
      this.studentList.splice(deleteIndex,1);
      localStorage.setItem('studentskey',JSON.stringify(this.studentList));
    }
  }

}
