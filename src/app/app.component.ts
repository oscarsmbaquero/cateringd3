import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//COMPONENTS
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { FooterComponent } from '../core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cateringd3';

  redirigirWhatsapp() {
    const telefono = '+34678623776'; // Reemplaza esto con el número de teléfono deseado
    const url = `https://wa.me/${telefono}`;

    // Abre la URL de WhatsApp en la misma ventana o pestaña
    window.location.href = url;
  }
}
