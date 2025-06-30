import { Injectable } from '@angular/core';
import { TeacherModel } from '../models/teacher-model.model';
import { TeacherDetails } from '../teacher-details/teacher-details';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teacherList: TeacherModel[] = [];
  constructor() { 
    const oldData = localStorage.getItem('teacherkey');
    const parsedData: TeacherModel[] = oldData ? JSON.parse(oldData) : [];
    this.teacherList = parsedData;
  }
  getTeacherById(id: number): TeacherModel {
    return this.teacherList.find(teacher => teacher.ID == id)|| new TeacherModel();;
  }
  

}
