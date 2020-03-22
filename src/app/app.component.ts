import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  usersLanguage = "de";

  constructor(
    public translate: TranslateService,
    public cookieService: CookieService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de');

    if(!this.cookieService.get("lang")){
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/de|en/) ? browserLang : 'en');
      this.usersLanguage = browserLang.match(/de|en/) ? browserLang : 'en';

      return;
    }

    this.translate.use(this.cookieService.get("lang"));
    this.usersLanguage = this.cookieService.get("lang");
  }

  title = 'Corona-DataHub';

  changeLanguage(event) {
    document.cookie = "lang="+event.value;

    this.translate.use(event.value);
    this.usersLanguage = event.value;
  }
}
