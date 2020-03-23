import {Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, DoCheck, OnDestroy, Injectable} from '@angular/core';
import {tileLayer, latLng, marker, Marker, Icon, DivIcon} from 'leaflet';


import {DataService} from '../../service/data.service';
import {HTMLMarkerComponent} from '../../htmlmarker/htmlmarker.component';
import {MapsService} from '../../service/maps.service';

interface MarkerMetaData {
  name: String;
  markerInstance: Marker;
  componentInstance: ComponentRef<HTMLMarkerComponent>
}


@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.sass'],

})
export class LiveDataComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private maps: MapsService
    ) {
  }

  ngOnInit(): void {
  }


}
