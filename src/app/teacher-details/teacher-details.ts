import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../services/teacher-service';
import { StudentModel } from '../models/student-model.model';
import { TeacherModel } from '../models/teacher-model.model';

@Component({
  selector: 'app-teacher-details',
  imports: [],
  templateUrl: './teacher-details.html',
  styleUrl: './teacher-details.css'
})
export class TeacherDetails {
  TeacherID : number = 0;
  Detail! : TeacherModel;
  constructor(private route: ActivatedRoute, private teacherService: TeacherService){}
  ngOnInit(){
    this.TeacherID = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.TeacherID);
    
    this.Detail =  this.teacherService.getTeacherById(this.TeacherID);
    console.log(this.Detail);
  }
}
