import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  DoCheck,
  OnDestroy,
  Injectable,
  AfterContentInit
} from '@angular/core';
import {tileLayer, latLng, marker, Marker, Icon, DivIcon} from 'leaflet';
import * as L from 'leaflet';

import {DataService} from '../../../services/data.service';
import {HTMLMarkerComponent} from '../../htmlmarker/htmlmarker.component';
import {MapsService} from '../../../services/maps.service';
import {HtmlRkiMarkerComponent} from '../../html-rki-marker/html-rki-marker.component';

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<HTMLMarkerComponent>
}


@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss'],

})
export class LiveDataComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public resolver: ComponentFactoryResolver,
    public injector: Injector,
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
