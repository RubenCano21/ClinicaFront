  import { Component, OnInit } from '@angular/core';
  import { Medico } from '../medicos/medico';
  import { MedicoEspecialidadService } from '../medicos/medicoespe.service';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common'; 
  import { MedicoEspecialidad } from '../medicos/medicoespe';

  @Component({
      selector: 'app-listarespemedico',
      templateUrl: './listarespemedico.component.html',
      standalone: true,
      imports: [FormsModule, CommonModule]
  })
  export class ListarEspeMedicoComponent implements OnInit {
      medicosEspecialidades: MedicoEspecialidad[] = [];

      constructor(private medicoEspecialidadService: MedicoEspecialidadService) {}

      ngOnInit(): void {
          this.listaMedicosEspe();
      }
      
      listaMedicosEspe(): void {
          this.medicoEspecialidadService.listarMedicoEspecialidad().subscribe(
            (data: MedicoEspecialidad []) => {
              this.medicosEspecialidades = data;
              console.log(this.medicosEspecialidades);
            },
            (error) => {
              console.error('Error al obtener pacientes:', error);
            }
          );
        }
  }