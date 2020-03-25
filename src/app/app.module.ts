import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatSelectModule,
  MatSliderModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {LiveDataComponent} from './components/maps/live-data/live-data.component';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookieService} from 'ngx-cookie-service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CookieBannerComponent} from './components/cookie-banner/cookie-banner.component';
import {RkiMapsComponent} from './components/maps/rki-maps/rki-maps.component';
import {RiskLocationsComponent} from './components/risk-locations/risk-locations.component';
import {PopupComponent} from './components/maps/rki-maps/popup/popup.component';
import {ChangelogComponent} from './components/changelog/changelog.component';
import {HomeComponent} from './components/home/home.component';
import {HTMLMarkerComponent} from './components/htmlmarker/htmlmarker.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';
import {HtmlRkiMarkerComponent} from './components/html-rki-marker/html-rki-marker.component';
import {CreditsComponent} from './components/credits/credits.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    LiveDataComponent,
    HTMLMarkerComponent,
    HomeComponent,
    ImpressumComponent,
    DatenschutzComponent,
    RkiMapsComponent,
    RkiMapsComponent,
    HtmlRkiMarkerComponent,
    RiskLocationsComponent,
    CreditsComponent,
    PopupComponent,
    ChangelogComponent,
    CookieBannerComponent
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
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatFormFieldModule,
    MatSelectModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatDialogModule,
    MatGridListModule
  ],
  entryComponents: [HTMLMarkerComponent, HtmlRkiMarkerComponent, PopupComponent],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
