import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  public url: string = Global.urlseries

  constructor(private http: HttpClient) { }

  cargarPersonajesSerie(id) {
    var request = 'api/series/PersonajesSerie/' + id
    return this.http.get(this.url + request)
  }

  crearPersonaje(personaje) {
    var request = 'api/Personajes'
    var url = this.url + request
    return this.http.post(url, personaje)
  }

  cargarPersonajes() {
    var request = 'api/Personajes'
    return this.http.get(this.url + request)
  }

}
