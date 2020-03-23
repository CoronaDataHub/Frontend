import {Component, ComponentFactory, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {Icon, latLng, marker, tileLayer} from 'leaflet';
import {DataService} from './data.service';
import {HTMLMarkerComponent} from '../htmlmarker/htmlmarker.component';
import {Type} from '@angular/core/src/type';
import {HtmlRkiMarkerComponent} from '../html-rki-marker/html-rki-marker.component';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  maps: any[] = [];

  markers: any[] = [];
  options_rki = {
    layers: [
      tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png')
    ],
    zoom: 5,
    center: latLng(51.165691, 10.451526)
  };

  options_live = {
    layers: [
      tileLayer('https://a.tile.openstreetmap.de/{z}/{x}/{y}.png')
    ],
    zoom: 6.47,
    center: latLng(51.165691, 10.451526)
  };

  compontents: Component[] = [];

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver, private injector: Injector) {
    this.addComponent('HTMLMarkerComponent', HTMLMarkerComponent);
    this.addComponent('HtmlRkiMarkerComponent', HtmlRkiMarkerComponent);
  }

  ngOnInit(): void {
  }

  onResite(event) {
    console.log(event);
  }

  addComponent(name, component) {
    this.compontents[name] = {};
    this.compontents[name] = component;
  }

  drawMap(name): void{
    this.maps[name].map.invalidateSize();
  }

  onMapReady(map, name, httpPipe) {
    if (this.maps[name] == null || this.maps[name] == undefined) {
      this.maps[name] = {};
    }
    if (this.markers[name] == null || this.markers[name] == undefined) {
      this.markers[name] = {};
    }
    this.maps[name].map = map;

    httpPipe.subscribe((data: any) => {
      this.markers[name] = data;

      this.addMarker(name);
    });


  }

  addMarker(name) {
    // simply iterate over the array of markers from our data service
    // and add them to the map
    for (const entry of this.markers[name]) {
      // dynamically instantiate a HTMLMarkerCo
      // mponent

      let factory = null;

      switch (name) {
        case "live_data": {
          factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);
          break;
        }

        case "rki": {
          factory = this.resolver.resolveComponentFactory(HtmlRkiMarkerComponent);

          break;
        }
        default: {

          break;
        }
      }


      // we need to pass in the dependency injector
      const component = factory.create(this.injector);

      // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
      component.instance.data = entry;

      // we need to manually trigger change detection on our in-memory component
      // s.t. its template syncs with the data we passed in
      component.changeDetectorRef.detectChanges();

      // create a new Leaflet marker at the given position
      if (entry.latitude !== undefined && entry.longitude !== undefined) {
        let m = marker([Number.parseFloat(entry.latitude), Number.parseFloat(entry.longitude)]);

        // pass in the HTML from our dynamic component
        const popupContent = component.location.nativeElement;

        let test = Icon.extend({
          options: {
            iconUrl: './assets/marker-icon.png',

          }
        });

        m.setIcon(new test);

        // add popup functionality
        m.bindPopup(popupContent).openPopup();

        // finally add the marker to the map s.t. it is visible
        m.addTo(this.maps[name].map);

        // add a metadata object into a local array which helps us
        // keep track of the instantiated markers for removing/disposing them later
        this.markers[name].push({
          name: entry.name,
          markerInstance: m,
          componentInstance: component
        });
      }
    }
  }
}
