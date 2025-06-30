import { Injectable } from '@angular/core';
import { StudentModel } from './models/student-model.model';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private studentListService : StudentModel[] = [];
  constructor() { }
  setStudentList(list: StudentModel[]){
    this.studentListService = list;
    
  }
  getStudentList(){
    const oldData = localStorage.getItem("data");
    const parsedData: StudentModel[] = oldData ? JSON.parse(oldData) : [];
    this.studentListService = parsedData;
    return parsedData;
  }
}
