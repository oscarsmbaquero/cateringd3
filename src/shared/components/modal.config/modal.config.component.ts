import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translateService/translate.service';
//PRIMENG
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-config',
  standalone: true,
  imports: [ DialogModule, ButtonModule, TranslateModule, CommonModule ],
  templateUrl: './modal.config.component.html',
  styleUrl: './modal.config.component.css'
})
export class ModalConfigComponent implements OnInit {

@Output() closeModalEvent = new EventEmitter<void>();

@Input() isVisible: boolean = false;

  languageSelected: string | undefined;

  selectedLanguage: string | undefined;
  
  banderaUrl: string = '';

constructor(public translationService: TranslationService){}

ngOnInit(): void {
  this.languageActual();
}

onCloseModal() {
  this.closeModalEvent.emit(); 
}


useLanguage(language: string){
  this.languageSelected = language;
  this.selectedLanguage = language;
  console.log(this.selectedLanguage);
  
  this.translationService.changeLanguage(language);
  this.onCloseModal();
}

languageActual(){
  this.translationService.getCurrentLanguage().subscribe(lang => {
    //this.currentLanguage = lang;
    //this.updateFlag(lang); // Método que cambia la bandera
    console.log(lang);
    this.selectedLanguage = lang;
    // this.selectedLanguage = lang
    // this.textoIdioma =  lang.charAt(0).toUpperCase() + lang.slice(1);
    // this.currentLanguage =this.pintarIdioma(lang);
    // console.log(this.currentLanguage);
    
    
  });
}

// pintarIdioma(idioma: string): string {
//   let rutaBandera = '';

//   switch (idioma) {
//     case 'es': // Español
//       rutaBandera = '../../../assets/images/spain.png';
//       break;
//     case 'en': // Inglés
//       rutaBandera = '../../../assets/images/england.png';
//       break;
//     case 'euz': // Euskera
//       rutaBandera = '../../../assets/images/ikurrina.png';
//       break;
//     default:
//       rutaBandera = '../../../assets/images/spain.png';
//   }

//   return rutaBandera;
// }


}
