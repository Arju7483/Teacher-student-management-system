import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Student } from '../student/student';
@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
