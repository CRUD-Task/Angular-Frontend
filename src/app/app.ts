import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" routerLink="/">Employee CRUD</a>
          <div class="navbar-nav">
            <a class="nav-link" routerLink="/employees" 
               routerLinkActive="active">Employee List</a>
            <a class="nav-link" routerLink="/employees/new" 
               routerLinkActive="active">Add Employee</a>
          </div>
        </div>
      </nav>
      
      <!-- Debug message - remove after confirmation -->

      
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container { padding-top: 20px; }
    .active { font-weight: bold; color: #0d6efd !important; }
  `]
})
export class AppComponent {}