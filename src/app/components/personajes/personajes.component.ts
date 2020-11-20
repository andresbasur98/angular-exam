import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes = []

  constructor(private personajesService: PersonajesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const { idserie } = params

      this.personajesService.cargarPersonajesSerie(idserie).subscribe( (resp: any) => {
        console.log(resp)
        this.personajes = resp
      })
    })


  }

}
