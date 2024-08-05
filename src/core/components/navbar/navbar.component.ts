import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import the RouterModule here
import { Subscription } from 'rxjs';
import { NavbarService } from '../../services/navbarService/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  currentTheme = 'dark';
  selectedOption: string | undefined;
  private subscription: Subscription = new Subscription;

  constructor( private navbarService: NavbarService){

  }

  ngOnInit(): void {
    this.subscription = this.navbarService.selectedOption$.subscribe(option => {
      this.selectedOption = option;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectOption(option: string) {
    this.navbarService.setSelectedOption(option);
    //this.selectedOption = option;
    this.toggleNavbar();
  }

  toggleNavbar() {
    this.navbarService.collapseNavbar();
    
  }

}
