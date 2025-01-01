import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  subtype: string = '';
  flag: boolean = false;
  images: any;
  mainheading: any;

  constructor(public route: ActivatedRoute, public cs: CommonService, public router: Router) {}

  ngOnInit(): void {
    const storedSubtype = sessionStorage.getItem('subtype');
    if (storedSubtype) {
      this.subtype = storedSubtype;
    } else {
      this.subtype = '';
    }
    this.loadImagesForSubtype(this.subtype)
  }

  loadImagesForSubtype(subtype: string): void {
    // Based on the subtype, determine the folder and load images with id and product name
    switch (subtype) {
      case '2B/BAMillFinish':
        this.images = [
          { mainHeading: '2B BA Mill Finish', id: '2bbamillfinish1', productName: '2B BA Mill Finish', src: 'assets/2bbamillfinish/2bbamillfinish.jpg' }
        ];
        break;
      case '#4Brushed':
        this.images = [
          { mainHeading: '#4 Brushed', id: '4brushed1', productName: '#4 Brushed 1', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed2', productName: '#4 Brushed 2', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed3', productName: '#4 Brushed 3', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed4', productName: '#4 Brushed 1', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed5', productName: '#4 Brushed 2', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed6', productName: '#4 Brushed 3', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed7', productName: '#4 Brushed 1', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed8', productName: '#4 Brushed 2', src: 'assets/4brushed/4brushed1.jpg' },
          { mainHeading: '#4 Brushed', id: '4brushed9', productName: '#4 Brushed 3', src: 'assets/4brushed/4brushed1.jpg' },
        ];
        break;
      case 'Hairline':
        this.images = [
          { mainHeading: 'Hairline', id: 'hairline1', productName: 'Hairline 1', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline2', productName: 'Hairline 2', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline3', productName: 'Hairline 1', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline4', productName: 'Hairline 2', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline5', productName: 'Hairline 1', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline6', productName: 'Hairline 2', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline7', productName: 'Hairline 1', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline8', productName: 'Hairline 2', src: 'assets/hairline/hairline1.jpg' },
          { mainHeading: 'Hairline', id: 'hairline9', productName: 'Hairline 1', src: 'assets/hairline/hairline1.jpg' },
        ];
        break;
      case '#8SuperMirror':
        this.images = [
          { mainHeading: '#8 SuperMirror', id: 'supermirror1', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror2', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror3', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror4', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror5', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror6', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror7', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror8', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror9', productName: '#8 SuperMirror 1', src: 'assets/supermirror/supermirror1.png' },
        ];
        break;
      case 'SSStrips':
        this.images = [
          { mainHeading: 'SS Strips', id: 'ssstrip1', productName: 'SS Strips 1', src: 'assets/ssstrips/ssstrips1.jpg' },
        ];
        break;
      case 'Pipes&Tubes':
        this.images = [
          { mainHeading: 'Pipes & Tubes', id: 'pipe1', productName: 'Pipes & Tubes 1', src: 'assets/pipestubes/pipe1.jpg' },
          { mainHeading: 'Pipes & Tubes', id: 'pipe2', productName: 'Pipes & Tubes 2', src: 'assets/pipestubes/pipe2.jpg' }
        ];
        break;
      case 'SSFlats':
        this.images = [
          { mainHeading: 'SS Flats', id: 'ssflat1', productName: 'SS Flats 1', src: 'assets/ssflats/ssflat1.jpg' },
          { mainHeading: 'SS Flats', id: 'ssflat2', productName: 'SS Flats 2', src: 'assets/ssflats/ssflat2.jpg' }
        ];
        break;
      case 'SSPipes':
        this.images = [
          { mainHeading: 'SS Pipes', id: 'sspipes1', productName: 'SS Pipes 1', src: 'assets/sspipes/sspipes1.jpg' },
          { mainHeading: 'SS Pipes', id: 'sspipes2', productName: 'SS Pipes 2', src: 'assets/sspipes/sspipes2.jpg' }
        ];
        break;
      case 'SSAngles':
        this.images = [
          { mainHeading: 'SS Angles', id: 'ssangles1', productName: 'SS Angles 1', src: 'assets/ssangles/ssangles1.jpg' },
          { mainHeading: 'SS Angles', id: 'ssangles2', productName: 'SS Angles 2', src: 'assets/ssangles/ssangles2.jpg' }
        ];
        break;
      case 'SSRods':
        this.images = [
          { mainHeading: 'SS Rods', id: 'ssrods1', productName: 'SS Rods 1', src: 'assets/ssrods/ssrods1.jpg' },
          { mainHeading: 'SS Rods', id: 'ssrods2', productName: 'SS Rods 2', src: 'assets/ssrods/ssrods2.jpg' }
        ];
        break;
      case 'SSHrFinishSheets':
        this.images = [
          { mainHeading: 'SS Hr Finish Sheets', id: 'sshrfinish1', productName: 'SS Hr Finish Sheets 1', src: 'assets/sshrfinish/sshrfinish1.jpg' },
          { mainHeading: 'SS Hr Finish Sheets', id: 'sshrfinish2', productName: 'SS Hr Finish Sheets 2', src: 'assets/sshrfinish/sshrfinish2.jpg' }
        ];
        break;
      case 'SSPlates':
        this.images = [
          { mainHeading: 'SS Plates', id: 'ssplates1', productName: 'SS Plates 1', src: 'assets/ssplates/ssplates1.jpg' },
          { mainHeading: 'SS Plates', id: 'ssplates2', productName: 'SS Plates 2', src: 'assets/ssplates/ssplates2.jpg' },
          { mainHeading: 'SS Plates', id: 'ssplates3', productName: 'SS Plates 3', src: 'assets/ssplates/ssplates3.jpg' }
        ];
        break;
      default:
        this.images = []; // Default to empty array if no subtype is found
        break;
    }
    this.mainheading = this.images[0].mainHeading;
  }
  

  onImageClick(image: any): void {
    this.router.navigate(['/product-description', image.id],{queryParams:{productName:image.productName, src:image.src}});
  }
}
