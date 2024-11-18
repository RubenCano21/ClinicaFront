import {Component, OnInit} from '@angular/core';
import {EstadoIntervaloService} from "./estado-intervalo.service";

@Component({
  selector: 'app-estado-intervalo',
  standalone: true,
  imports: [],
  templateUrl: './estado-intervalo.component.html'
})
export class EstadoIntervaloComponent implements OnInit {

  estadosIntervalos: string[] = [];

  constructor(private estadoIntervaloService: EstadoIntervaloService) { }

  ngOnInit() {
    this.estadoIntervaloService.getEstadosIntervalo().subscribe({
      next: estados => {
        this.estadosIntervalos = estados;
      },
      error: err => console.log('Error', err)
    })
  }

}
