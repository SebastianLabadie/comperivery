import { i18nMenuTranslatorService } from './../core/services/i18n/i18n-menu-translator.service';
import { NbMenuItem } from '@nebular/theme';
import { I18nServiceService } from './../core/services/i18n/i18n-service.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menu: NbMenuItem[];
  
  constructor(
    private menuTranslator: i18nMenuTranslatorService,
    private translate: I18nServiceService
  ) {
    
   }

  ngOnInit() {
  }

}
