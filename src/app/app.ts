import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { StudentDataService } from './student-data-service';
import { StudentModel } from './models/student-model.model';
import { Teacher } from './teacher/teacher';
import { Userinfo } from './services/userinfo';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularapp';
  showNavbar = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        // Extract base URL without query parameters
        const url = e.url.split('?')[0];
        
        // Hide navbar for these exact routes
        this.showNavbar = !['/', '/login', '/signup'].includes(url);
      });
  }

}
