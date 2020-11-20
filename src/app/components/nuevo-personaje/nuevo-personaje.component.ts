import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent implements OnInit {
  public series = []

  public insertarForm = this.fb.group({
    idPersonaje: 0,
    nombre: '',
    imagen: '',
    idSerie: 0

  })

  constructor(private fb: FormBuilder, private seriesService: SeriesService, private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.seriesService.cargarSeries().subscribe( (resp: any) => {
     console.log(resp)
      this.series = resp
    })
  }

  crearPersonaje() {
    // console.log({
    //   idPersonaje: this.insertarForm.get("idPersonaje").value,
    //   nombre: this.insertarForm.get("nombre").value,
    //   imagen: this.insertarForm.get("imagen").value,
    //   idSerie: parseInt(this.insertarForm.get("idSerie").value),
    // })

    var personaje = {
      idPersonaje: this.insertarForm.get("idPersonaje").value,
      nombre: this.insertarForm.get("nombre").value,
      imagen: this.insertarForm.get("imagen").value,
      idSerie: parseInt(this.insertarForm.get("idSerie").value),
    }

    this.personajeService.crearPersonaje(personaje).subscribe( resp => {
      console.log(resp)
      console.log('Se ha creado ok')
    })    

  }

}
