import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-paciente',
  templateUrl: './fpaciente.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.getPacientes();
  }

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

  actualizarPaciente(paciente: Paciente): void {
    // Aquí puedes realizar la acción que desees
    // Por ejemplo, abrir un formulario de edición
    console.log('Actualizar paciente:', paciente);
    // También podrías refrescar la lista de pacientes si eso es lo que deseas
    this.getPacientes(); // Opcional, si deseas refrescar la lista después de la acción
  }
}

