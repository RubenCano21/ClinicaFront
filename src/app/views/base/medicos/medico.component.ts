import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { Medico } from './medico';
import { Injectable } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

import { CommonModule } from '@angular/common';
import {
 ButtonDirective,
    ColComponent,

    FormControlDirective,

    FormLabelDirective,
    FormSelectDirective,
  } from '@coreui/angular';

@Injectable({
    providedIn: 'root',
})

@Component({
    selector: 'app-medico',
    templateUrl: './medico.component.html',
    standalone: true,
  imports: [ ColComponent,
     FormLabelDirective, FormControlDirective, FormSelectDirective,
     ButtonDirective,
     FormsModule, CommonModule]
})
export class MedicoComponent implements OnInit {
    medicos: Medico[] = []; // Inicializa la lista de pacientes

    constructor(private medicoService: MedicoService,) {}

    // Implementación correcta del método ngOnInit
    ngOnInit(): void {
        // Puedes llamar a otro método aquí si necesitas
        this.getMedicos(); // Solo si quieres obtener los pacientes al inicializar

    }

    // Método para registrar un medico
    registrarMedico(form: NgForm): void {
        const formValues = form.value;
        const nuevoMedico: Medico = {
            id: 0,
            ci: formValues.ci,
            nombre: formValues.nombre,
            apellido: formValues.apellido,
            email: formValues.email,
            telefono: formValues.telefono,
            sexo: formValues.sexo,
        };
        console.log('Nuevo Médico:', nuevoMedico);


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

    // Método para obtener la lista de medicos
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
