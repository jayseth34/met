import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-products',
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
          { mainHeading: '2B Finish', id: '2bbamillfinish1', productName: '2B BA Mill Finish', src: 'assets/2bbamillfinish/2bbamillfinish.jpg' },
          { mainHeading: '2B Finish', id: '2bbamillfinish1', productName: '2B Finish', src: 'assets/2bbamillfinish/2bsheet.jpg' }

        ];
        break;
      case '#4Brushed':
        this.images = [
          { mainHeading: '#4 Brushed', id: '4brushed1', productName: '#4 Finish - Silver', src: 'assets/4brushed/finishsilver.png' },
          { mainHeading: '#4 Brushed', id: '4brushed2', productName: '#4 Finish - Gold', src: 'assets/4brushed/finishgold1.png' },
          { mainHeading: '#4 Brushed', id: '4brushed3', productName: '#4 Finish - Rose Gold', src: 'assets/4brushed/finishrosegold.png' },
          { mainHeading: '#4 Brushed', id: '4brushed4', productName: '#4 Finish - Bronze', src: 'assets/4brushed/finishbronze.png' },
          { mainHeading: '#4 Brushed', id: '4brushed5', productName: '#4 Finish - Champagne', src: 'assets/4brushed/finishchampagne.png' },
          { mainHeading: '#4 Brushed', id: '4brushed6', productName: '#4 Finish - Black', src: 'assets/4brushed/finishblack.png' },
          { mainHeading: '#4 Brushed', id: '4brushed7', productName: '#4 Finish - Blue', src: 'assets/4brushed/finishblue.png' },
          { mainHeading: '#4 Brushed', id: '4brushed8', productName: '#4 Finish - Pink', src: 'assets/4brushed/finishpink.png' },
          { mainHeading: '#4 Brushed', id: '4brushed9', productName: '#4 Finish - Green', src: 'assets/4brushed/finishgreen.png' },
        ];
        break;
      case 'Hairline':
        this.images = [
          { mainHeading: 'Hairline', id: 'hairline1', productName: 'Hairline - Silver', src: 'assets/hairline/hsilver.png' },
          { mainHeading: 'Hairline', id: 'hairline2', productName: 'Hairline - Gold', src: 'assets/hairline/hgold.png' },
          { mainHeading: 'Hairline', id: 'hairline3', productName: 'Hairline - Rose Gold', src: 'assets/hairline/hrosegold.png' },
          { mainHeading: 'Hairline', id: 'hairline4', productName: 'Hairline - Bronze', src: 'assets/hairline/hbronze.png' },
          { mainHeading: 'Hairline', id: 'hairline5', productName: 'Hairline - Champagne', src: 'assets/hairline/hchampagne.png' },
          { mainHeading: 'Hairline', id: 'hairline6', productName: 'Hairline - Black', src: 'assets/hairline/hblack.png' },
          { mainHeading: 'Hairline', id: 'hairline7', productName: 'Hairline - Blue', src: 'assets/hairline/hblue.png' },
          { mainHeading: 'Hairline', id: 'hairline8', productName: 'Hairline - Pink', src: 'assets/hairline/hpink.png' },
          { mainHeading: 'Hairline', id: 'hairline9', productName: 'Hairline - Green', src: 'assets/hairline/hgreen.png' },
        ];
        break;
      case '#8SuperMirror':
        this.images = [
          { mainHeading: '#8 SuperMirror', id: 'supermirror1', productName: 'Super Mirror - Silver', src: 'assets/supermirror/smsilver.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror2', productName: 'Super Mirror - Gold', src: 'assets/supermirror/smgold.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror3', productName: 'Super Mirror - Rose Gold', src: 'assets/supermirror/smrosegold.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror4', productName: 'Super Mirror - Bronze', src: 'assets/supermirror/smbronze.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror5', productName: 'Super Mirror - Champagne', src: 'assets/supermirror/smchampagne1.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror6', productName: 'Super Mirror - Black', src: 'assets/supermirror/smblack.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror7', productName: 'Super Mirror - Blue', src: 'assets/supermirror/smblue.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror8', productName: 'Super Mirror - Pink', src: 'assets/supermirror/smpink.png' },
          { mainHeading: '#8 SuperMirror', id: 'supermirror9', productName: 'Super Mirror - Green', src: 'assets/supermirror/smgreen.png' },
        ];
        break;
      case 'SSStrips':
        this.images = [
          { mainHeading: 'SS Strips', id: 'ssstrip1', productName: 'SS Strips 1', src: 'assets/ssstrips/ssstrips.png' },
        ];
        break;
      case 'Pipes&Tubes':
        this.images = [
          { mainHeading: 'Pipes & Tubes', id: 'pipe1', productName: 'Rectangular Tube', src: 'assets/pipesandtubes/pandtsquarepipe.jpg' },
        ];
        break;
      case 'SSFlats':
        this.images = [
          { mainHeading: 'SS Flats', id: 'ssflat1', productName: 'SS Flats', src: 'assets/ssflats/ssflats.jpg' },
          { mainHeading: 'SS Flats', id: 'ssflat2', productName: 'SS Flat Bar', src: 'assets/ssflats/flatbar.jpg' },
          { mainHeading: 'SS Flats', id: 'ssflat3', productName: 'SS Flats', src: 'assets/ssflats/ssflats1.jpg' },
        ];
        break;
      case 'SSPipes':
        this.images = [
          { mainHeading: 'SS Pipes', id: 'sspipes1', productName: 'SS Pipes', src: 'assets/sspipes/sspipes.jpg' },
          { mainHeading: 'SS Pipes', id: 'sspipes2', productName: 'SS Pipes 1', src: 'assets/sspipes/sspipes1.jpg' }
        ];
        break;
      case 'SSAngles':
        this.images = [
          { mainHeading: 'SS Angles', id: 'ssangles1', productName: 'SS Angles', src: 'assets/ssangles/ssangles.jpg' },
          { mainHeading: 'SS Angles', id: 'ssangles2', productName: 'SS Angles', src: 'assets/ssangles/ssangles1.jpg' },
        ];
        break;
      case 'SSRods':
        this.images = [
          { mainHeading: 'SS Rods', id: 'ssrods1', productName: 'SS 304 Round Bar', src: 'assets/ssrods/304roundbar.jpg' },
          { mainHeading: 'SS Rods', id: 'ssrods2', productName: 'SS Square Bar', src: 'assets/ssrods/squarebar.jpg' },
          { mainHeading: 'SS Rods', id: 'ssrods3', productName: 'SS Hex Bar', src: 'assets/ssrods/hexbar.jpg' },

        ];
        break;
      case 'SSHrFinishSheets':
        this.images = [
          { mainHeading: 'SS Hr Finish Sheets', id: 'sshrfinish1', productName: 'SS Hr Finish Sheets 1', src: 'assets/sshrfinishsheets/sshrfinishsheet.jpg' },
        ];
        break;
      case 'SSPlates':
        this.images = [
          { mainHeading: 'SS Plates', id: 'ssplates1', productName: 'SS Plates 1', src: 'assets/ssplates/ssplates.jpg' },
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
