// applications.component.ts
import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
    selector: 'app-applications',
    imports: [CommonModule],
    templateUrl: './applications.component.html',
    styleUrl: './applications.component.css'
})
export class ApplicationsComponent implements AfterViewInit {
    imageUrls = [
        'assets/applications/a1.jpg',
        'assets/applications/a2.jpg',
        'assets/applications/a3.jpg',
        'assets/applications/a4.jpg',
        'assets/applications/a5.jpg',
        'assets/applications/a6.jpg',
        'assets/applications/a7.jpg',
        'assets/applications/a8.jpg',
        'assets/applications/a9.jpg',
        'assets/applications/a10.jpg',
        'assets/applications/a11.jpeg',
        'assets/applications/a1.jpg',
        'assets/applications/a2.jpg',
        'assets/applications/a3.jpg',
        'assets/applications/a4.jpg',
        'assets/applications/a5.jpg',
        'assets/applications/a6.jpg',
        'assets/applications/a7.jpg',
        'assets/applications/a8.jpg',
        'assets/applications/a9.jpg',
        'assets/applications/a10.jpg',
        // Add more image URLs as needed
    ];

    lightboxOpen = false;
    currentLightboxIndex = 0;

    @ViewChildren('gridItem') gridItems!: QueryList<ElementRef>;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.setGridItemSpans();
    }

    setGridItemSpans() {
        if (this.gridItems) {
            this.gridItems.forEach((item) => {
                const randomColumnSpan = Math.floor(Math.random() * 3) + 1; // 1 to 3
                const randomRowSpan = Math.floor(Math.random() * 2) + 1; // 1 to 2

                item.nativeElement.style.gridColumn = `span ${randomColumnSpan}`;
                item.nativeElement.style.gridRow = `span ${randomRowSpan}`;
            });
            this.fixGridGaps();
        }
    }
    fixGridGaps() {
        const grid = this.el.nativeElement.querySelector('.applications-grid');
        if (grid) {
            grid.style.gridAutoFlow = 'dense';
        }
    }

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