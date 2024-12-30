import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent {
  imageUrls = [
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    'assets/metalline1.jpg',
    'assets/metalline2.jpg',
    'assets/metalline3.jpg',
    // ... more image URLs
  ];

  lightboxOpen = false;
  currentLightboxIndex = 0;

  openLightbox(index: number) {
    this.currentLightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }
    prevImage() {
        this.currentLightboxIndex = (this.currentLightboxIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    }

    nextImage() {
        this.currentLightboxIndex = (this.currentLightboxIndex + 1) % this.imageUrls.length;
    }
}
