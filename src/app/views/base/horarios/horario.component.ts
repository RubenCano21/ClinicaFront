import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,NgForm,FormsModule } from '@angular/forms';
import { HorarioService } from './horario.service'; 
import { Horario } from './horario'; 
import { CommonModule } from '@angular/common'; 
@Component({
    selector: 'app-consultorio',
    templateUrl: './horario.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, FormsModule], 
})
export class HorarioComponent {
    horario: Horario[] = [];


    constructor(
        private fb: FormBuilder,
        private horarioService: HorarioService
      ) {} 
    
    
     
     
      onSubmit(form:NgForm): void {
          const formValues = form.value;
          const nuevoHorario: Horario = {
            id: 0, // or any default value or logic to generate a new id
            dia: formValues.dia,
            horaInicio: formValues.horaInicio,
            horaFin: formValues.horaFin
          };
    
          this.horarioService.registrarHorario(nuevoHorario).subscribe(
            (response) => {
              console.log('Horario registrado:', response);
              form.reset(); // Opcional: Limpia el formulario
            },
            (error) => {
              console.error('Error al registrar horario:', error);
            }
          );
        }
      }
