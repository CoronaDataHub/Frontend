import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {LiveDataComponent} from './maps/live-data/live-data.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HTMLMarkerComponent} from './htmlmarker/htmlmarker.component';
import {DataService} from './service/data.service';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookieService} from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LiveDataComponent,
    HTMLMarkerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    AngularOpenlayersModule,
    HttpClientModule,
    LeafletModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatFormFieldModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents: [HTMLMarkerComponent],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
