import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { PersonajesService } from 'src/app/services/personajes.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  public series = []
  public personajes = []

  public modificarForm = this.fb.group({
    idSerie: 0,
    idPersonaje: 0

  })

  constructor(private seriesService: SeriesService, private personajesService: PersonajesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.seriesService.cargarSeries().subscribe( (resp: any) => {
      this.series = resp
    })
    this.personajesService.cargarPersonajes().subscribe( (resp: any) => {
      // console.log(resp)
      this.personajes = resp
    })
  }


  modificar() {
     console.log({
       idSerie: parseInt(this.modificarForm.get("idSerie").value),
      idPersonaje: parseInt(this.modificarForm.get("idPersonaje").value),
    })

      
      var idpersonje =  parseInt(this.modificarForm.get("idPersonaje").value)
      var idserie =  parseInt(this.modificarForm.get("idSerie").value)
    this.seriesService.modificarSeriePersona(idpersonje, idserie).subscribe( resp => {
      console.log(resp),
      console.log('modificado con éxito')
    })

  }

}
