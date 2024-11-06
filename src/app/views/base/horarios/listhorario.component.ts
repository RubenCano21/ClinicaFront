import { Component, OnInit } from '@angular/core';
import { HorarioService } from './horario.service';
import { Horario } from './horario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listhorario.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HorarioComponent implements OnInit {
  horario: Horario[] = [];

  constructor(private horarioService: HorarioService) {}

  ngOnInit(): void {
    this.obtenerHorario();
  }

  obtenerHorario(): void {
    this.horarioService.listarHorario().subscribe(
      (data) => {
        this.horario = data; // Asigna la respuesta a la variable consultorios
      },
      (error) => {
        console.error('Error al obtener consultorios', error);
      }
    );
  }

  actualizarHorario(id: number): void {
    console.log('Actualizar consultorio con ID:', id);
    // Aquí puedes añadir la lógica para actualizar el consultorio
  }

}

