import { Component } from '@angular/core';
import {MedicoHorario} from "./medico-horario";
import {FormBuilder, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MedicoHorarioService} from "./medico-horario.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CommonModule} from "@angular/common";
import {
  AlignDirective, BgColorDirective, BorderDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormModule, TableColorDirective,
  TableDirective
} from "@coreui/angular";

@Component({
  selector: 'app-medico-horario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormModule, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, AlignDirective, TableColorDirective, BorderDirective, BgColorDirective],
  templateUrl: './medico-horario.component.html'
})
export class MedicoHorarioComponent {

  medicoHorario: MedicoHorario[] = [];

  horasDisponibles = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00',
    '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00'
  ];

  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


  constructor(
      private fb: FormBuilder,
      private medicoHorarioService: MedicoHorarioService){


  }

    ngOnInit(): void {
      this.medicoHorario.sort((a,b) => a.horario.horaFin.localeCompare(b.horario.horaInicio));
      this.getMedicoHorario();
    }

    getMedicoHorario(): void {
      this.medicoHorarioService.listarMedicoHorario().subscribe({
        next: (data: MedicoHorario[]) => {
          this.medicoHorario = data;
        },
      error: (error) => {
        console.error('Error al obtener medicoHorario:', error);
      }
      });

    }

    onSubmit(form :NgForm): void {

      const formValues = form.value;
      const nuevoMedicoHorario: MedicoHorario = {
        id: 0, // or any default value or logic to generate a new id
        medico: formValues.medico,
        consultorio: formValues.consultorio,
        horario: formValues.horario,
        cantDisponibles: formValues.cantDisponibles
      };

      // this.medicoHorarioService.registrarMedicoHorario(nuevoMedicoHorario).subscribe(
      //   (response) => {
      //     console.log('MedicoHorario registrado:', response);
      //     form.reset(); // Opcional: Limpia el formulario
      //   },
      //   (error) => {
      //     console.error('Error al registrar MedicoHorario:', error);
      //   }
      // );
    }

  obtenerMedicoPorDiaYHora(dia: string, hora: string): any {
      return this.medicoHorario.find((medicoHorario) => {
        return medicoHorario.horario.horaInicio === hora && medicoHorario.horario.dia === dia;
      });
    }

}
