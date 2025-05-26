import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PROJECTS, Proyect } from '../data/proyect.data';
import { CarruselComponent } from "../carrusel/carrusel.component";

@Component({
  selector: 'app-project',
  imports: [CommonModule, CarruselComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
 projects = PROJECTS;
  

  

}
