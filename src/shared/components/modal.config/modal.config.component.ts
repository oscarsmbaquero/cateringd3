import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EventService } from '../../../core/services/modalOpiniones/modal.service';
import { TranslationService } from '../../../core/services/translateService/translate.service';
import { NavbarService } from '../../../core/services/navbarService/navbar.service';


@Component({
  selector: 'app-modal-config',
  standalone: true,
  imports: [ DialogModule, ButtonModule, TranslateModule ],
  templateUrl: './modal.config.component.html',
  styleUrl: './modal.config.component.css'
})
export class ModalConfigComponent {

@Input() isVisible: boolean = false;
  languageSelected: string | undefined;
  selectedLanguage: string | undefined;

constructor(
  private eventService: EventService,
  public translationService: TranslationService,
  private navbarService: NavbarService
){

}

onCloseModal() {
  console.log('entro cerrar modal');
  
  this.eventService.closeModal();
}


useLanguage(language: string){
  console.log('entro', language);  
  this.languageSelected = language;
  this.selectedLanguage = language;
  this.translationService.changeLanguage(language);
  //this.navbarService.collapseNavbar();
  this.onCloseModal();
}

  //visible: boolean = false;

}
