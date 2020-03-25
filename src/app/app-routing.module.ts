import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangelogComponent} from './components/changelog/changelog.component';
import {ImpressumComponent} from './components/impressum/impressum.component';
import {DatenschutzComponent} from './components/datenschutz/datenschutz.component';
import {HomeComponent} from './components/home/home.component';
import {CreditsComponent} from './components/credits/credits.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'changelog', component: ChangelogComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
