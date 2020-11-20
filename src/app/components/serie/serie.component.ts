import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  public serie = {}

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      const { idserie } = params
      this.seriesService.cargarSerie(idserie).subscribe( resp =>{
        console.log(resp)
        this.serie = resp
      })
    })

  }

}
