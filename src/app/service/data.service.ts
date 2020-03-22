import {Injectable} from '@angular/core';
import {LatLngExpression} from 'leaflet';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class Marker {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  country: string;
  objectid: string;
  dataHistories: any;
  lastUpdated: string;
}

@Injectable()
export class DataService {
  constructor(
    public http: HttpClient
  ) {
  }
  markers: Marker[];
  getMarkers() {
    return this.markers;
  }

  getData(){
    return this.http.get(environment.backendHost+"/api/v1/coronavirusapp/getPlaces", {headers: {"APIKEY": "8ZQ+oL.-Pz5v|M]9I%eg,01AL4JRF6apE)m#3HNW!P2}~U*Fb{j7_VB"}})
  }

  getMarkerById(id) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for (let marker of this.markers) {
      // just add a random number at the end
      // marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

}
