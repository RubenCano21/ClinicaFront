import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from './especialidad.service';
import { Especialidad } from './especialidad';
import { CommonModule } from '@angular/common';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";

@Component({
  selector: 'app-listar-especialidad',
  templateUrl: './listespecialidad.component.html',
  standalone: true,
  imports: [CommonModule, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class EspecialidadComponent implements OnInit {
  especialidad: Especialidad[] = [];

  constructor(private especialidadService: EspecialidadService) {}

  ngOnInit(): void {
    this.obtenerEspecialidad();
  }

  obtenerEspecialidad(): void {
    this.especialidadService.listarEspecialidad().subscribe(
      (data) => {
        this.especialidad = data; // Asigna la respuesta a la variable consultorios
      },
      (error) => {
        console.error('Error al obtener consultorios', error);
      }
    );
  }

  actualizarEspecialidad(id: number): void {
    console.log('Actualizar consultorio con ID:', id);
    // Aquí puedes añadir la lógica para actualizar el consultorio
  }

}

