import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SerieComponent } from './components/serie/serie.component'
import { AppRoutingModule } from './app.router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SerieComponent,
    PersonajesComponent,
    NuevoPersonajeComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
