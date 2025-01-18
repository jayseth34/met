import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-header',
    imports: [MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        NgIf,
        RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  subtypes = [
    'subtype1',
    'subtype2',
    'subtype3',
    'subtype4',
    'subtype5',
    'subtype6',
    'subtype7',
    'subtype8',
    'subtype9'
  ];
  
  constructor(private router: Router, public route: ActivatedRoute, public cs:CommonService) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToSubtype(subtype: string): void {
    sessionStorage.setItem('subtype', subtype);
    this.isDropdownOpen = false;
    this.isMenuOpen = false;
    this.router.navigate(['/products']).then(() => {
      window.location.reload(); // Force page refresh
    });  }

  getFlagForSubtype(value: string): boolean {
    // Map values to flags
    const flagMapping: Record<string, boolean> = {
      '2B/BAMillFinish': true,
      '#4Brushed': true,  // Example: add more cases as needed
      'Hairline': true,    // Example: add more cases as needed
      '#8SuperMirror': true, // Example: add more cases as needed
      'SSStrips': false,
      'Pipes&Tubes': false,
      'SSFlats': false,
      'SSPipes': false,
      'SSAngles': false,
      'SSRods': false,
      'SSHrFinishSheets': false,
      'SSPlates': false,
      // Add more mappings as necessary
    };
  
    // Return the flag based on the selected value
    return flagMapping[value] || false;  // Default to false if not found
  }
}
