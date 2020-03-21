import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient
  ) { }

  getLiveMapData(){
    return this.http.get("https://cdn.mycoding.systems/wl/?id=0rA05zSrxuFoueh7zdSpPWg5JJRHa2SH");
  }
}
