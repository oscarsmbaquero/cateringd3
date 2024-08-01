import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import the RouterModule here

import { NavbarService } from '../../services/navbarService/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  currentTheme: any

  selectedOption: any;

  constructor( private navbarService: NavbarService){

  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.toggleNavbar();
  }

  toggleNavbar() {
    this.navbarService.collapseNavbar();
    
  }

}
