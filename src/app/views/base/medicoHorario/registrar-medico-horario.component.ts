import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medicos/medico.service';
import { MedicoEspecialidadService } from '../medicos/medicoespe.service';
import { ConsultorioService } from '../consultorios/consultorio.service';
import { HorarioService } from '../horarios/horario.service';
import { MedicoHorarioService } from './medico-horario.service';
import { Medico } from '../medicos/medico';
import { Consultorio } from '../consultorios/consultorio';
import { Horario } from '../horarios/horario';
import { MedicoHorario } from './medico-horario';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MedicoEspecialidad } from '../medicos/medicoespe';

@Component({
  selector: 'app-medico-horario',
  templateUrl: './registrar-medico-horario.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MedicoHorarioComponent implements OnInit {
  medicos: Medico[] = [];
  medicoEspecialidades: MedicoEspecialidad[] = [];
  consultorios: Consultorio[] = [];
  horarios: Horario[] = [];
  selectedMedicoId: number | undefined;
  selectedConsultorioId: number | undefined;
  selectedHorarioId: number | undefined;
  cantDisponibles: number = 0;

  constructor(
    private medicoService: MedicoService,
    private consultorioService: ConsultorioService,
    private horarioService: HorarioService,
    private medicoEspecialidadService: MedicoEspecialidadService,
    private medicoHorarioService: MedicoHorarioService
  ) {}

  ngOnInit(): void {
    this.cargarMedicos();
    this.cargarConsultorios();
    this.cargarHorarios();
   this.cargarEspecialidad();
  }


  cargarMedicos(): void {
    this.medicoService.getMedicos().subscribe(
      (data: Medico[]) => {
        this.medicos = data;
        console.log('Médicos cargados:', this.medicos);
      },
      (error) => {
        console.error('Error al cargar médicos:', error);
      }
    );
  }


  cargarConsultorios(): void {
    this.consultorioService.listarConsultorios().subscribe(
      (data: Consultorio[]) => {
        this.consultorios = data;
        console.log('Consultorios cargados:', this.consultorios);
      },
      (error) => {
        console.error('Error al cargar consultorios:', error);
      }
    );
  }

  cargarHorarios(): void {
    this.horarioService.listarHorario().subscribe(
      (data: Horario[]) => {
        this.horarios = data;
        console.log('Horarios cargados:', this.horarios);
      },
      (error) => {
        console.error('Error al cargar horarios:', error);
      }
    );
  }

  cargarEspecialidad(): void {
    this.medicoEspecialidadService.listarMedicoEspecialidad().subscribe(
      (data: MedicoEspecialidad []) => {
        this.medicoEspecialidades = data;
        console.log(this.medicoEspecialidades);
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }

  // registrarRelacion(): void {
  //   if (this.selectedMedicoId && this.selectedConsultorioId && this.selectedHorarioId && this.cantDisponibles > 0) {
  //     // Crear un objeto MedicoHorario solo con los IDs
  //     const medicoHorario = {
  //       id: 0,  // Suponiendo que el backend genera el ID
  //       medicoId: this.selectedMedicoId,   // Asignar solo el ID de Medico
  //       consultorioId: this.selectedConsultorioId,  // Asignar solo el ID de Consultorio
  //       horarioId: this.selectedHorarioId, // Asignar solo el ID de Horario
  //       cantDisponibles: this.cantDisponibles, // Asignar la cantidad disponible
  //
  //     };
  //
  //     console.log('Datos enviados al backend:', medicoHorario);
  //
  //     // Llamar al servicio para registrar la relación
  //     this.medicoHorarioService.registrarMedicoHorario(medicoHorario).subscribe(
  //       response => {
  //         this.consultorios = [];
  //         console.log('Relación de Médico-Horario registrada correctamente', response);
  //       },
  //       error => {
  //         console.error('Error al registrar relación', error);
  //       }
  //     );
  //   } else {
  //     console.log('Por favor, seleccione todos los campos y asegúrese de que la cantidad sea mayor a 0.');
  //   }
  // }


}
