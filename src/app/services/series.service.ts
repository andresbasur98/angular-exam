import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public url: string = Global.urlseries

  constructor(private http: HttpClient) { }

  cargarSeries(){
    var request = 'api/series'
    return this.http.get(this.url + request)

  }

  cargarSerie( idserie ) {
    var request = 'api/series/'+ idserie
    return this.http.get(this.url + request)
  }

  modificarSeriePersona(idpersona, idserie) {
    var request = `/api/Personajes/${idpersona}/${idserie}`;
    return this.http.put(this.url + request, {})
  }

}
