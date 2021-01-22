import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankomatiComponent } from './komponente/bankomati/bankomati.component';
import { LoginFormaComponent } from './komponente/login-forma/login-forma.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BankomatDetaljiComponent } from './komponente/bankomat-detalji/bankomat-detalji.component';
import { NoviBankomatComponent } from './komponente/novi-bankomat/novi-bankomat.component';

@NgModule({
  declarations: [
    AppComponent,
    BankomatiComponent,
    LoginFormaComponent,
    BankomatDetaljiComponent,
    NoviBankomatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
