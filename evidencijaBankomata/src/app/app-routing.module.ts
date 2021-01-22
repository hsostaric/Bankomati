import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { BankomatDetaljiComponent } from './komponente/bankomat-detalji/bankomat-detalji.component';
import {BankomatiComponent} from './komponente/bankomati/bankomati.component';
import {LoginFormaComponent} from './komponente/login-forma/login-forma.component';
import { NoviBankomatComponent } from './komponente/novi-bankomat/novi-bankomat.component';

const routes: Routes = [
  {path:'bankomati', component:BankomatiComponent},

  {path: 'login', component:LoginFormaComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'detail/:id', component: BankomatDetaljiComponent},
  {path: 'novi', component:NoviBankomatComponent},
  {path:'edit/:id', component:NoviBankomatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
