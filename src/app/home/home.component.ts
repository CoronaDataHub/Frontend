import {Component, OnInit} from '@angular/core';
import {RkiMapsComponent} from '../maps/rki-maps/rki-maps.component';
import {LiveDataComponent} from '../maps/live-data/live-data.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
   ) {
  }

  ngOnInit() {
  }

  changeTab(event) {
      if(event.index == 1){
        // this.rkiMapsComponent.drawNew();
      }
      if(event.index == 0){
        // this.liveMap.drawNew();

      }
  }

  test() {
    event.preventDefault();
    console.log("Test")
  }

}
