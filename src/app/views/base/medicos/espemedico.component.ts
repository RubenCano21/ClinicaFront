import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medicos/medico.service';
import { EspecialidadService } from '../especialidades/especialidad.service';
import { MedicoEspecialidadService } from '../medicos/medicoespe.service';
import { FormsModule ,NgForm} from '@angular/forms';
import { Medico } from './medico'; 
import { Especialidad } from '../especialidades/especialidad';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-medico-especialidad',
  templateUrl: './espemedico.component.html',
  standalone: true,
  imports: [ FormsModule, CommonModule ]
})
export class MedicoEspecialidadComponent implements OnInit {
  medicos: Medico[] = [];
  especialidades: Especialidad[] = [];
  selectedMedicoId: number | undefined;
  selectedEspecialidadId: number | undefined;

  constructor(
    private medicoService: MedicoService,
    private especialidadService: EspecialidadService,
    private medicoEspecialidadService: MedicoEspecialidadService
  ) {}

  ngOnInit(): void {
    this.cargarMedicos();
    this.cargarEspecialidades();
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

  cargarEspecialidades(): void {
    this.especialidadService.listarEspecialidad().subscribe(
      (data: Especialidad[]) => {
        this.especialidades = data;
        console.log('Especialidades cargadas:', this.especialidades);
      },
      (error) => {
        console.error('Error al cargar especialidades:', error);
      }
    );
  }

  // Método para guardar la relación de Médico y Especialidad
  registrarRelacion(form: NgForm): void {
    if (this.selectedMedicoId && this.selectedEspecialidadId) {
      const medicoEspecialidad = {
        medicoId: this.selectedMedicoId,
        especialidadId: this.selectedEspecialidadId
      };

      this.medicoEspecialidadService.createMedicoEspecialidad(medicoEspecialidad).subscribe(
        (response) => {
          form.resetForm();
          this.selectedMedicoId = undefined;
          this.selectedEspecialidadId = undefined;
          console.log('Relación registrada correctamente', response);
        },
        (error) => {
          console.error('Error al registrar relación', error);
          
        }
      );
    } else {
      console.log('Por favor, seleccione ambos médico y especialidad.');
     
    }
  }
}
