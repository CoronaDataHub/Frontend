import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  DoCheck,
  OnDestroy,
  ViewChild,
  Injectable
} from '@angular/core';
import {tileLayer, latLng, marker, Marker, Icon, DivIcon} from 'leaflet';


import {DataService} from '../../../services/data.service';
import {HTMLMarkerComponent} from '../../htmlmarker/htmlmarker.component';
import {HtmlRkiMarkerComponent} from '../../html-rki-marker/html-rki-marker.component';
import {MatDialog} from '@angular/material';
import {PopupComponent} from './popup/popup.component';
import {MapsService} from '../../../services/maps.service';

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<HtmlRkiMarkerComponent>
}

@Component({
  selector: 'app-rki-maps',
  templateUrl: './rki-maps.component.html',
  styleUrls: ['./rki-maps.component.sass'],

})
export class RkiMapsComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    public dialog: MatDialog,
    public maps: MapsService
    ) {
  }
  options = {
    layers: [
      tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png')
    ],
    zoom: 6.47,
    center: latLng(51.165691, 10.451526)
  };
  ngOnInit(): void {
  }
}
