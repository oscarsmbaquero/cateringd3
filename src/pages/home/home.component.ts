import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translateService/translate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  selectedLanguage: string | undefined;

  constructor(public translationService: TranslationService){

  }

  ngOnInit() {
    AOS.init({
      duration: 1550,
      delay: 550,
      once: true
    });//AOS - 2
    AOS.refresh();
    this.languageActual();
  }

  languageActual(){
    this.translationService.getCurrentLanguage().subscribe(lang => {
      this.selectedLanguage = lang;      
    });
  }
}