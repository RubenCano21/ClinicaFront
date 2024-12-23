import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { Injectable } from '@angular/core';

import {FormsModule, NgForm} from "@angular/forms";

import {
  BgColorDirective, BorderDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormLabelDirective,
  FormSelectDirective,
} from '@coreui/angular';

@Injectable({
    providedIn: 'root',
})

@Component({
    selector: 'app-paciente',
    templateUrl: './paciente.component.html',
    standalone: true,
  imports: [ColComponent,CardComponent, CardHeaderComponent,
    CardBodyComponent,
    FormLabelDirective, FormControlDirective, FormSelectDirective,
    ButtonDirective,
    FormsModule, BgColorDirective, BorderDirective]
})
export class PacienteComponent implements OnInit {
    pacientes: Paciente[] = []; // Inicializa la lista de pacientes
    constructor(private pacienteService: PacienteService) {}

    // Implementación correcta del método ngOnInit
    ngOnInit(): void {
        // Puedes llamar a otro método aquí si necesitas
        this.getPacientes(); // Solo si quieres obtener los pacientes al inicializar
    }

    // Método para registrar un paciente
    registrarPaciente(form: NgForm): void {
        const formValues = form.value;
        const nuevoPaciente: Paciente = {
            id: 0, // or any default value or logic to generate a new id
            ci: formValues.ci,
            nombre: formValues.nombre,
            apellido: formValues.apellido,
            fechaNacimiento: formValues.fechaNacimiento,
            email: formValues.email,
            telefono: formValues.telefono,
            sexo: formValues.sexo,
            direccion: formValues.direccion,
        };



        this.pacienteService.registrarPaciente(nuevoPaciente).subscribe(
            (response) => {
                console.log('Paciente registrado:', response);
                this.getPacientes(); // Opcional: Actualiza la lista de pacientes
                 form.reset();// Opcional: Limpia el formulario\

            },
            (error) => {
                console.error('Error al registrar paciente:', error);
            }
        );
    }

    // Método para obtener la lista de pacientes
    getPacientes(): void {
        this.pacienteService.getPacientes().subscribe(
            (data: Paciente[]) => {
                this.pacientes = data;
            },
            (error) => {
                console.error('Error al obtener pacientes:', error);
            }
        );
    }
}
