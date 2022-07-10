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
    { key: "pl", value: "PL"},
    { key: "en", value: "EN"},
  ];

  setLang(lang: string) {
    this.selectedLang = lang;
  }
}
