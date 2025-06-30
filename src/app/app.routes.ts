import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Student } from './student/student';
import { AllTeacher } from './all-teacher/all-teacher';
import { Teacher } from './teacher/teacher';
import { TruelyAllteacher } from './truely-allteacher/truely-allteacher';
import { TeacherDetails } from './teacher-details/teacher-details';
import { Landing } from './landing/landing';
import { Signup } from './signup/signup';
import { Login } from './login/login';
export const routes: Routes = [
    {path : 'home', component: Home},
    {path : 'student', component : Student},
    {path: 'allteacher', component: AllTeacher},
    {path: 'teacher', component: Teacher },
    {path: 'truelyAllTeacher', component: TruelyAllteacher},
    {path: 'teacherDetails/:id', component : TeacherDetails},
    {path: '', component:Landing},
    {path: 'signup', component: Signup},
    {path: 'login', component:Login}
];
