import {Component, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import {Icon, latLng, marker, tileLayer} from 'leaflet';
import {DataService} from './data.service';
import {HTMLMarkerComponent} from '../components/htmlmarker/htmlmarker.component';
import {HtmlRkiMarkerComponent} from '../components/html-rki-marker/html-rki-marker.component';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  maps: any[] = [];
  markers: any[] = [];
  components: Component[] = [];

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver, private injector: Injector) {
    this.addComponent('HTMLMarkerComponent', HTMLMarkerComponent);
    this.addComponent('HtmlRkiMarkerComponent', HtmlRkiMarkerComponent);
  }

  /**
   * Add the component
   *
   * @param name
   * @param component
   */
  addComponent(name, component) {
    this.components[name] = {};
    this.components[name] = component;
  }

  /**
   * Draw the map
   *
   * @param name
   */
  drawMap(name): void {
    this.maps[name].map.invalidateSize();
  }

  /**
   * Fires when the map is ready
   *
   * @param map
   * @param name
   * @param httpPipe
   */
  onMapReady(map, name, httpPipe) {
    map.invalidateSize();
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

  /**
   * Add the marker to the map
   *
   * @param name
   */
  addMarker(name) {
    // simply iterate over the array of markers from our data service
    // and add them to the map
    for (const entry of this.markers[name]) {
      let factory = null;

      switch (name) {
        case 'live_data': {
          factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);
          break;
        }

        case 'rki': {
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
