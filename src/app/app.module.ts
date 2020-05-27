import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormsModule es para forms templates y reactiveFormsModule es para forms reactive

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { HeaderComponent } from './header/header.component';
import { AbmArticulosComponent } from './abm-articulos/abm-articulos.component';
import { DadoComponent } from './dado/dado.component';
import { FormValidacionComponent } from './form-validacion/form-validacion.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    HeaderComponent,
    AbmArticulosComponent,
    DadoComponent,
    FormValidacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
