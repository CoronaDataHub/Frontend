import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {DatenschutzComponent} from './datenschutz/datenschutz.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'datenschutz', component: DatenschutzComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
