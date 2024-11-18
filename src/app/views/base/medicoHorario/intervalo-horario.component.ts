import {Component, OnInit} from '@angular/core';
import { NgForOf} from "@angular/common";
import {IntervaloHorario} from "./intervalo-horario";
import {IntervaloHorarioService} from "./intervalo-horario.service";
import {FormsModule} from "@angular/forms";
import {MedicoHorario} from "./medico-horario";
import {MedicoHorarioService} from "./medico-horario.service";

@Component({
  selector: 'app-intervalo-horario',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,

  ],
  templateUrl: './intervalo-horario.component.html'
})
export class IntervaloHorarioComponent implements OnInit {

  intervalos: IntervaloHorario[] = [];
  medicoHorarios: MedicoHorario[] = [];
  medicoHorarioId: number | null = null;


  constructor(private intervaloService: IntervaloHorarioService,
              private medicoHorarioService: MedicoHorarioService) {}


  ngOnInit(){
    this.cargarIntervalos();
    this.cargarMedicoHorarios();
  }

  cargarIntervalos(): void {
    this.intervaloService.listarIntervalos().subscribe({
      next: (data: IntervaloHorario[]) => {
        this.intervalos = data;
      },
      error: (error) => {
        console.error('Error al obtener intervalos:', error);
      }
    });
  }

  cargarMedicoHorarios(): void {
    this.medicoHorarioService.listarMedicoHorario().subscribe({
      next: (data: MedicoHorario[]) => {
        this.medicoHorarios = data;
      },
      error: (error) => {
        console.error('Error al obtener médico-horarios:', error);
      }
    });
  }

  filtrarPorMedico(): void {
    if (this.medicoHorarioId) {
      this.intervaloService.filtrarPorMedico(this.medicoHorarioId).subscribe({
        next: (data: IntervaloHorario[]) => (this.intervalos = data),
        error: (err) => console.error('Error al filtrar intervalos:', err),
      });
    } else {
      this.cargarIntervalos(); // Mostrar todos si no se selecciona médico
    }
  }

}
