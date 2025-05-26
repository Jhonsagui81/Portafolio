import { Component, NgModule } from '@angular/core';
import { ThemeService } from '../theme.service';
import { MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { ExperiencieComponent } from '../experiencie/experiencie.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  constructor(public theme: ThemeService){}

  smoothScroll(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }
}

