import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class I18nServiceService {
  constructor(private translate: TranslateService) {}

   localeEvent$ = new BehaviorSubject<string>('es');


  changeLocale(locale: string) {
    this.translate.use(locale);
    this.localeEvent$.next(locale);
  }
}
