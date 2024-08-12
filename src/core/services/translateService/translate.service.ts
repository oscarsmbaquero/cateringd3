import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  defaultLang = 'es';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.defaultLang);
    
    const browserLang = this.translateService.getBrowserLang();
    if (browserLang) {
      this.translateService.use(browserLang);
    }
  }

  changeLanguage(language: string): void {
    console.log(language);
    
    this.translateService.use(language);
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang || this.defaultLang;
  }
}
