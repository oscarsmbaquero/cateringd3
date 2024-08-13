import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
//COMPONENTS
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { ModalConfigComponent } from '../shared/components/modal.config/modal.config.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, ModalConfigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    TranslateService
  ]
})
export class AppComponent  {
  title = 'cateringd3';
  scrollPosition = 0;

  modalAbierto : boolean | undefined;    

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  redirigirWhatsapp() {
    const telefono = '+34678623776'; // Reemplaza esto con el número de teléfono deseado
    const url = `https://wa.me/${telefono}`;
    window.location.href = url;
  }

  abrirModal() {    
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}
