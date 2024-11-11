import {Component, OnInit} from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Consultorio} from "../consultorios/consultorio";
import {NgForOf} from "@angular/common";
import {Especialidad} from "../especialidades/especialidad";
import {ConsultorioService} from "../consultorios/consultorio.service";

@Component({
  selector: 'app-registrar-medico-horario',
  standalone: true,
  imports: [
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ColComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    FormSelectDirective,
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './registrar-medico-horario.component.html'
})
export class RegistrarMedicoHorarioComponent implements OnInit {

  consultorios: Consultorio[] = [];

  constructor(private consultoriosService: ConsultorioService) {
  }

  ngOnInit(): void {
        this.getConsultorio();
    }


  getConsultorio(): void {
    this.consultoriosService.listarConsultorios().subscribe({
      next: (data: Consultorio []) => {
        this.consultorios = data;
      },
      error: (error) => {
        console.error('Error al obtener consultorios:', error);
      }
    });
  }

}
