import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  videoId!: string; // Video ID from the route
  width: string = '800'; // Default width
  height: string = '450'; // Default height

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Get the videoId from the route parameters
    this.route.params.subscribe(params => {
      this.videoId = params['videoId'];
    });
  }

  getVideoUrl(): SafeResourceUrl {
    const baseUrl = 'https://www.youtube.com/embed/';
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}${this.videoId}`);
  }
}
