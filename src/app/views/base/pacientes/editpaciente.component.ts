import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { NgClass } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-paciente-listar',
  templateUrl: './editpaciente.component.html',
  standalone: true,
  imports: [BrowserModule, FormsModule,NgClass]
})
export class PacienteComponent implements OnInit {
  paciente: Paciente = {
    id: 0,
    ci: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    email: '',
    telefono: '',
    sexo: '',
    direccion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe(
      (data: Paciente[]) => {
        if (data.length > 0) {
          this.paciente = data[0]; // Assign the first paciente from the array
        }
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }

  actualizarPaciente(): void {
    if (this.paciente) {
      this.pacienteService.actualizarPaciente(this.paciente).subscribe(() => {
        this.router.navigate(['/pacientes/listar']); // Redirige a la lista después de actualizar
      });
    }
  }
}

