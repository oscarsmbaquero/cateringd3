import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
declare var Parallax: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  images: string[] = [
    'assets/images/canape1.jpg',
    'assets/images/canape2.jpg',
    'assets/images/canape3.jpg',
    'assets/images/canape4.jpg',
    'assets/images/canape5.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    AOS.init(
    //   {
    //   duration: 1550,
    //   delay: 550,
    // }
  );
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const elements = document.querySelectorAll('.image-container');
  //   elements.forEach((element: any) => {
  //     const position = element.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     if (position < windowHeight) {
  //       element.classList.add('in-view');
  //     } else {
  //       element.classList.remove('in-view');
  //     }
  //   });
  // }

 

}
