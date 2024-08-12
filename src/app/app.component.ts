import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
//COMPONENTS
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { FooterComponent } from '../core/components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    TranslateService
  ]
})
export class AppComponent implements OnInit {
  languajes =[ 'es', 'en'];
  //private translateService = inject(TranslateService)
  title = 'cateringd3';
  scrollPosition = 0;

  ngOnInit(): void {
    const defaultLanguaje = localStorage.getItem('languaje') || 'es';
    //this.translateService.setDefaultLang(defaultLanguaje);
    //this.translateService.use(defaultLanguaje);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  // changeLAnguaje(lang: string){
  //   this.translateService.use(lang);
  //   localStorage.setItem('languaje', lang)

  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }

  scrollToTop() {
    // Usa JavaScript puro para hacer scroll suavemente hacia arriba
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  redirigirWhatsapp() {
    const telefono = '+34678623776'; // Reemplaza esto con el número de teléfono deseado
    const url = `https://wa.me/${telefono}`;

    // Abre la URL de WhatsApp en la misma ventana o pestaña
    window.location.href = url;
  }
}
