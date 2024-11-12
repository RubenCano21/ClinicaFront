/*import {Component, OnInit} from '@angular/core';
import {
  BgColorDirective,
  CardBodyComponent,
  CardComponent, CardFooterComponent,
  CardHeaderComponent,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";
import {NgForOf} from "@angular/common";
import {IntervaloHorario} from "./intervalo-horario";
import {IntervaloHorarioService} from "./intervalo-horario.service";

@Component({
  selector: 'app-intervalo-horario',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    NgForOf,
    CardFooterComponent,
    BgColorDirective
  ],
  templateUrl: './intervalo-horario.component.html'
})
export class IntervaloHorarioComponent implements OnInit {

  intervalo: IntervaloHorario[] = [];

  constructor(private intervaloService: IntervaloHorarioService  ) {}


  ngOnInit(){
    this.obtenerIntervalos();
  }

  obtenerIntervalos(): void {
    this.intervaloService.listarIntervalos().subscribe({
      next: (data: IntervaloHorario[]) => {
        this.intervalo = data;
      },
      error: (error) => {
        console.error('Error al obtener intervalos:', error);
      }
    });
  }




}*/
