import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { Medico } from './medico';
import { Injectable } from '@angular/core';
import { NgClass } from '@angular/common';
import {FormsModule, NgForm} from "@angular/forms";
import {IconDirective} from "@coreui/icons-angular";
import { EspecialidadService } from '../especialidades/especialidad.service';
import { Especialidad } from '../especialidades/especialidad';
import { CommonModule } from '@angular/common';
import {
    AvatarComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    BreadcrumbRouterComponent, ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormCheckComponent,
    FormCheckInputDirective, FormCheckLabelDirective,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective, ProgressComponent,
    RowComponent, TableDirective,
    TextColorDirective
  } from '@coreui/angular';

@Injectable({
    providedIn: 'root',
})

@Component({
    selector: 'app-medico',
    templateUrl: './medico.component.html',
    standalone: true,
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent,
    CardBodyComponent, BreadcrumbComponent, BreadcrumbItemComponent, NgClass,
    BreadcrumbRouterComponent, FormDirective, FormLabelDirective, FormControlDirective, FormSelectDirective,
    FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, AvatarComponent, IconDirective,
    ProgressComponent, TableDirective, FormsModule, CommonModule]
})
export class MedicoComponent implements OnInit {
    medicos: Medico[] = []; // Inicializa la lista de pacientes
    especialidadesobtenidas: Especialidad [] = [];

    constructor(
        private medicoService: MedicoService,
        private especialidadService: EspecialidadService
    ) {}

    // Implementación correcta del método ngOnInit
    ngOnInit(): void {
        // Puedes llamar a otro método aquí si necesitas
        this.getMedicos(); // Solo si quieres obtener los pacientes al inicializar
        this.getEspecialidad();
    }

    getEspecialidad(): void {
        this.especialidadService.listarEspecialidad().subscribe(
          (data: Especialidad []) => {
            this.especialidadesobtenidas = data;
          },
          (error) => {
            console.error('Error al obtener especialidades:', error);
          }
        );
      }
    // Método para registrar un paciente
    registrarMedico(form: NgForm): void {
        const formValues = form.value;
        const nuevoMedico: Medico = {
            id: 0, // or any default value or logic to generate a new id
            ci: formValues.ci,
            nombre: formValues.nombre,
            apellido: formValues.apellido,
            email: formValues.email,
            telefono: formValues.telefono,
            sexo: formValues.sexo,
            especialidades: formValues.especialidadesobtenidas
        };



        this.medicoService.registrarMedico(nuevoMedico).subscribe(
            (response) => {
                console.log('Medico registrado:', response);
                this.getMedicos(); // Opcional: Actualiza la lista de pacientes
                 form.reset();// Opcional: Limpia el formulario\

            },
            (error) => {
                console.error('Error al registrar Medico:', error);
            }
        );
    }

    // Método para obtener la lista de pacientes
    getMedicos(): void {
        this.medicoService.getMedicos().subscribe({
            next: (data: Medico[]) => {
                this.medicos = data;
            },
            error: (error) => {
                console.error('Error al obtener los Medicos:', error);
            }
        }
        );
    }

}
