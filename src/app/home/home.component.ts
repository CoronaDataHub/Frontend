import {Component, OnInit} from '@angular/core';
import {RkiMapsComponent} from '../maps/rki-maps/rki-maps.component';
import {LiveDataComponent} from '../maps/live-data/live-data.component';
import {MatDialog} from '@angular/material';
import {PopupComponent} from '../maps/rki-maps/popup/popup.component';
import {CookieService} from 'ngx-cookie-service';
import {MapsService} from '../service/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popupIsShown = false;

  constructor(
    public dialog: MatDialog,
    public cookieService: CookieService,
    public maps: MapsService
  ) {
  }

  ngOnInit() {
  }

  changeTab(event) {
    if (event.index == 0) {
      this.maps.drawMap("live_data")
    }
    if (event.index == 1){

      this.maps.drawMap("rki");


    if (!this.popupIsShown) {
        if (!this.cookieService.get('rki_popup_not_show_anymore')) {


          this.dialog.open(PopupComponent, {});
          this.popupIsShown = true;
        }
      }

    }

  }

  test() {
    event.preventDefault();
    console.log('Test');
  }

}
