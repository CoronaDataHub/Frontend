import {Component, OnInit, ComponentFactoryResolver, ComponentRef, Injector, DoCheck, OnDestroy} from '@angular/core';
import {tileLayer, latLng, marker, Marker, Icon, DivIcon} from 'leaflet';


import {DataService} from '../../service/data.service';
import {HTMLMarkerComponent} from '../../htmlmarker/htmlmarker.component';

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
  loaded = false;
  map;
  markers: any[] = [];
  options = {
    layers: [
      tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png')
    ],
    zoom: 6.47,
    center: latLng(51.165691, 10.451526)
  };

  constructor(private dataService: DataService, private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  ngOnInit(): void {
  }

  onMapReady(map) {
    // get a local reference to the map as we need it later
    this.map = map;
    this.dataService.getData().subscribe((data: any) => {
      this.markers = data;
      this.loaded = true;

      this.addMarker();
    });


  }

  addMarker() {
    // simply iterate over the array of markers from our data service
    // and add them to the map
    for (const entry of this.markers) {
      // dynamically instantiate a HTMLMarkerComponent
      const factory = this.resolver.resolveComponentFactory(HTMLMarkerComponent);

      // we need to pass in the dependency injector
      const component = factory.create(this.injector);

      // wire up the @Input() or plain variables (doesn't have to be strictly an @Input())
      component.instance.data = entry;

      // we need to manually trigger change detection on our in-memory component
      // s.t. its template syncs with the data we passed in
      component.changeDetectorRef.detectChanges();

      // create a new Leaflet marker at the given position
      if(entry.latitude !== undefined && entry.longitude !== undefined) {
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
        m.addTo(this.map);

        // add a metadata object into a local array which helps us
        // keep track of the instantiated markers for removing/disposing them later
        this.markers.push({
          name: entry.name,
          markerInstance: m,
          componentInstance: component
        });
      }
    }
  }
}
