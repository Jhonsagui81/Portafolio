import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Proyect } from '../data/proyect.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  @ViewChild('mainImage') mainImage!: ElementRef;
  @Input() project!: Proyect;
  currentIndex = 0;
  isAutoplay = true;
  imagesLoaded = false;
  autoplayInterval: any;

  get currentImage() {
    return this.project.images[this.currentIndex]?.main;
  }

  toggleAutoplay() {
    this.isAutoplay = !this.isAutoplay;
    if(this.isAutoplay) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.project.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  selectImage(index: number) {
    this.currentIndex = index;
  }

  toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.mainImage.nativeElement.parentElement.requestFullscreen();
    }
  }

  ngOnInit() {
    // Precarga de imágenes
    this.preloadImages().then(() => this.imagesLoaded = true);
  }

  private preloadImages(): Promise<void[]> {
    return Promise.all(this.project.images.map(img => {
      return new Promise<void>((resolve) => {
        const image = new Image();
        image.src = img.main;
        image.onload = () => resolve();
      });
    }));
  }

}
