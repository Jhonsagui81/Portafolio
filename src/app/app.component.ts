import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContacComponent } from "./contac/contac.component";
import { ExperiencieComponent } from "./experiencie/experiencie.component";
import { ProjectComponent } from "./project/project.component";
import { PROJECTS } from './data/proyect.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, HeaderComponent, ContacComponent, ExperiencieComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  projects = PROJECTS;
  title = "Porfolio";
  isDarkMode = false;
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}
