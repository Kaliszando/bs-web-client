import { Component } from '@angular/core';
import { Lang } from "../../../core/model/lang";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'bs-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {

  selectedLang: string = 'en';

  languages: Lang[] = [
    { key: "pl", value: "PL"},
    { key: "en", value: "EN"},
  ];

  constructor(private translateService: TranslateService) {
    this.selectedLang = this.translateService.currentLang;
  }

  setLang(lang: string) {
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
}
