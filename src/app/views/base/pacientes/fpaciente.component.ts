import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent, CardFooterComponent,
  CardHeaderComponent,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";

@Component({
  selector: 'app-pacientes-listar',
  templateUrl: './fpaciente.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, CardHeaderComponent, CardComponent, CardBodyComponent, TableDirective, TableColorDirective, ButtonDirective, CardFooterComponent]
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService,private router: Router) {}

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
    this.router.navigate(['/pacientes/actualizar-paciente', paciente.id]);
  }
}

