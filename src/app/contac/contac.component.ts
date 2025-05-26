import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contac',
  imports: [NgStyle, CommonModule],
  templateUrl: './contac.component.html',
  styleUrl: './contac.component.css'
})
export class ContacComponent {
  floatingBoxes: number[] = [];
  ngOnInit(){
    console.log('Numero de cuadros:',this.floatingBoxes.length)
    this.floatingBoxes = Array(15).fill(0).map((x, i) => i);
  }

  getRandomStyle() {
    const size = Math.floor(Math.random() * 100 + 20); // 20px a 120px
    const left = Math.random() * 120 - 10; // -10% a 110% para mayor dinamismo
    const duration = Math.random() * 25 + 15; // 15s a 40s
    const delay = Math.random() * -30; // Mayor variación inicial
  
    return {
      'width': `${size}px`,
      'height': `${size}px`,
      'left': `${left}%`,
      'animation-duration': `${duration}s`,
      'animation-delay': `${delay}s`
    };
  }
}
