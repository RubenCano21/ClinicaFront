import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';
import { Medico } from './medico';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import {ButtonDirective} from "@coreui/angular";

@Component({
  selector: 'app-medico-listar',
  templateUrl: './listmedico.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonDirective]
})
export class MedicoComponent implements OnInit {
  medicos: Medico[] = [];

  constructor(private medicoService: MedicoService,private router: Router) {}

  ngOnInit(): void {
    this.listaMedicos();
  }

  listaMedicos(): void {
    this.medicoService.getMedicos().subscribe(
      (data: Medico[]) => {
        this.medicos = data;
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }

  actualizarMedico(medicos: Medico): void {
    this.router.navigate(['/medicos/actualizar-medico', medicos.id]);
  }
}

