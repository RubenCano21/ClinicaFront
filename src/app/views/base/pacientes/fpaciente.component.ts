import { Component, OnInit } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {
  BgColorDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent, CardFooterComponent,
  CardHeaderComponent, CardTextDirective,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";

@Component({
  selector: 'app-pacientes-listar',
  templateUrl: './fpaciente.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, CardHeaderComponent, CardComponent, CardBodyComponent , TableColorDirective, ButtonDirective, BgColorDirective]
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService,private router: Router) {}

  ngOnInit(): void {
    this.getPaciente();
  }

  getPaciente(): void {
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

