import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,NgForm,FormsModule } from '@angular/forms';
import { HorarioService } from './horario.service'; 
import { Horario } from './horario'; 
import { CommonModule } from '@angular/common'; 
import { ConsultorioService } from '../consultorios/consultorio.service';
import { Consultorio } from '../consultorios/consultorio';

@Component({
    selector: 'app-consultorio',
    templateUrl: './horario.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, FormsModule], 
})
export class HorarioComponent {
    horario: Horario[] = [];
    consultoriosobtener: Consultorio[] = [];

    constructor(
        private fb: FormBuilder,
        private horarioService: HorarioService,
        private consultorioService: ConsultorioService

        
      ) {} 
    
    
     
      ngOnInit(): void {
        this.getConsultorios();
      }

      getConsultorios(): void {
        this.consultorioService.listarConsultorios().subscribe(
          (data: Consultorio[]) => {
            this.consultoriosobtener = data;
          },
          (error) => {
            console.error('Error al obtener consultorios:', error);
          }
        );
      }

      onSubmit(form:NgForm): void {
          const formValues = form.value;
          const nuevoHorario: Horario = {
            id: 0, // or any default value or logic to generate a new id
            dia: formValues.dia,
            horaInicio: formValues.horaInicio,
            horaFin: formValues.horaFin,
            capacidad: formValues.capacidad,
            consultorio: formValues.consultoriosobtener // Asignar el ID del consultorio seleccionado y un nombre vacío
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
