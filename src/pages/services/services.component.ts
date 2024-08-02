import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var Parallax: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  images: string[] = [
    'assets/images/canape1.jpg',
    'assets/images/canape2.jpg',
    'assets/images/canape3.jpg',
    'assets/images/canape4.jpg',
    'assets/images/canape5.jpg'
  ];

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const elements = document.querySelectorAll('.image-container');
    elements.forEach((element: any) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (position < windowHeight) {
        element.classList.add('in-view');
      } else {
        element.classList.remove('in-view');
      }
    });
  }

 

}
