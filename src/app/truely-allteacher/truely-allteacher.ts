import { Component } from '@angular/core';
import { TeacherModel } from '../models/teacher-model.model';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-truely-allteacher',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './truely-allteacher.html',
  styleUrl: './truely-allteacher.css'
})
export class TruelyAllteacher {
  teacherList : TeacherModel[] = [];
  isUpdate: boolean = false;
  updateTeacherForm : FormGroup;
  constructor(private fb: FormBuilder){
    this.updateTeacherForm = this.fb.group({
      ID: [''],
      Name : [''],
      Email: [''],
      Dept: ['']
    });

 const oldData = localStorage.getItem('teacherkey');
    const parsedData: TeacherModel[] = oldData ? JSON.parse(oldData) : [];
    this.teacherList = parsedData;
  }
  onEdit(currentteacher:TeacherModel){
    this.isUpdate = true;
    this.updateTeacherForm.patchValue({
    ID: currentteacher.ID,
    Name: currentteacher.Name,
    Email: currentteacher.Email,
    Dept: currentteacher.Dept
  });
  }
  Save(){
    const currentteacher = this.updateTeacherForm.value;
    const oldData = localStorage.getItem('teacherkey');
    const parsedData: TeacherModel[] = oldData ? JSON.parse(oldData) : [];
    this.teacherList = parsedData;
    const editIndex = this.teacherList.findIndex(s=>s.ID === currentteacher.ID);
    this.teacherList[editIndex] = currentteacher;
    console.log(this.teacherList);
    localStorage.setItem('teacherkey',JSON.stringify(parsedData));
    this.isUpdate = false;
  }
  Back(){
    this.isUpdate = false;
  }
  onDelete(id: number){
    const deleteIndex = this.teacherList.findIndex(s=>s.ID === id);
    if(deleteIndex !== -1){
      this.teacherList.splice(deleteIndex,1);
      localStorage.setItem('teacherkey',JSON.stringify(this.teacherList));
    }
  }
  onDetails(currentTeacher: TeacherModel){
    //used routerlink in button
  }

}
