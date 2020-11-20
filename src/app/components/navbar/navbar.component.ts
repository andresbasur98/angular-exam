import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public series: Array<any> = []

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.cargarSeries().subscribe( (resp: any) => {
      console.log(resp)
      this.series = resp
    })
  }

}
