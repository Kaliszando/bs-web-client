import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
