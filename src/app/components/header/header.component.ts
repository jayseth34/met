import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
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

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToSubtype(subtype: string): void {
    const flag = this.getFlagForSubtype(subtype); // Implement logic for flag
    this.router.navigate(['/products', subtype], { queryParams: { flag } });
    this.isDropdownOpen = false;
    this.isMenuOpen = false;
  }

  getFlagForSubtype(subtype: string): boolean {
    // Replace with your logic to determine the flag value
    return subtype === 'subtype1';
  }
}
