import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
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
import { ImpressumComponent } from './impressum/impressum.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { RkiMapsComponent } from './maps/rki-maps/rki-maps.component';
import { HtmlRkiMarkerComponent } from './html-rki-marker/html-rki-marker.component';
import { RiskLocationsComponent } from './risk-locations/risk-locations.component';
import { CreditsComponent } from './credits/credits.component';
import { PopupComponent } from './maps/rki-maps/popup/popup.component';
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
        ImpressumComponent,
        DatenschutzComponent,
        RkiMapsComponent,
        RkiMapsComponent,
        HtmlRkiMarkerComponent,
        RiskLocationsComponent,
        CreditsComponent,
        PopupComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatDialogModule
  ],
  entryComponents: [HTMLMarkerComponent, HtmlRkiMarkerComponent, PopupComponent],
  providers: [DataService, CookieService],
  bootstrap: [AppComponent],

})
export class AppModule {
}
