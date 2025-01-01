import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {
  product: any;
  staticApplications = [
    'Architectural Cladding',
    'Shopping Malls',
    'Elevator Cabins and Doors',
    'Decorative Facades',
    'Column Casings',
    'Display equipment',
    'Street Furniture',
    'Kitchen equipment',
    'Marine Industry',
    'Automotive & Aviation Industries'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.product = {
            productName: params['productName'],
            src: params['src'],
            applications: this.staticApplications 
        }
      console.log(this.product);
    });
  }
}
