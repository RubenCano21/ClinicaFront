import { Component, OnInit } from '@angular/core';
import { MedicoHorarioService } from './medico-horario.service';
import { MedicoHorario } from './medico-horario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listar',
  templateUrl: './listar-medico-horario.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ListarComponent implements OnInit {
  medicoHorarios: MedicoHorario[] = [];

  constructor(    private medicoHorarioService: MedicoHorarioService) {}

  ngOnInit(): void {
    this.cargarMedicoHorarios();  // Cargar las relaciones de médico-horario
  }

    cargarMedicoHorarios(): void {
        this.medicoHorarioService.listarMedicoHorario().subscribe({
          next: (data: MedicoHorario[]) => {
            this.medicoHorarios = data;
            console.log('Relaciones médico-horario cargadas:', this.medicoHorarios);
          },
          error: (error) => {
            console.error('Error al cargar relaciones médico-horario:', error);
          }
        });
      }

        // cargarMedicoHorarios(): void {
        //     this.medicoHorarioService.listarMedicoHorario().subscribe(
        //       (data: any[]) => {
        //         // Mapeamos los datos para extraer los nombres en lugar de los IDs
        //         this.medicoHorarios = data.map(item => ({
        //           id: item.id,
        //           medicoId: item.medico.id,  // Extraer solo el ID de medico
        //           consultorioId: item.consultorio.id,  // Extraer solo el ID de consultorio
        //           horarioId: item.horario.id,  // Extraer solo el ID de horario
        //           medicoNombre: item.medico.nombre,  // Extraemos el nombre del médico
        //           medicoApellido: item.medico.apellido,  // Extraemos el nombre del médico
        //           consultorioNombre: item.consultorio.nombre,  // Extraemos el nombre del consultorio
        //           horarioDia: item.horario.dia,  // Extraemos el día del horario
        //           horarioHoraInicio: item.horario.horaInicio,  // Extraemos la hora de inicio
        //           horarioHoraFin: item.horario.horaFin,  // Extraemos la hora de fin
        //           cantDisponibles: item.cantDisponibles,
        //           medicoConsultorio: item.medicoConsultorio
        //         }));
        //       },
        //       (error) => {
        //         console.error('Error al cargar relaciones médico-horario:', error);
        //       }
        //     );
        //   }
}
