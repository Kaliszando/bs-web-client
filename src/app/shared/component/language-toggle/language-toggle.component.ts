import { Component, Input } from '@angular/core';
import { Lang } from "../../../core/model/lang";

@Component({
  selector: 'bs-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent {

  @Input()
  selectedLang: string = 'en'

  languages: Lang[] = [
    { key: "en", value: "EN"},
    { key: "pl", value: "PL"},
  ];

  setLang(lang: string) {
    this.selectedLang = lang;
  }
}
