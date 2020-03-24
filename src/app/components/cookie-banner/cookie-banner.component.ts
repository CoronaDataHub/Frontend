import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  accepted = false;

  constructor(
    public cookieService: CookieService
  ) { }

  ngOnInit() {
      if(this.cookieService.get("cookie_accepted")){
        this.accepted = true;
      }

  }

  accept(){
    document.cookie = "cookie_accepted=true";
    this.accepted = true;

  }


}
