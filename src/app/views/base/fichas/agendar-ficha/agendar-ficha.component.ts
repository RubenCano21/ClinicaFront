import {Component, OnInit} from '@angular/core';

import {AgendarFichaService} from "./agendar-ficha.service";
import {EspecialidadService} from "../../especialidades/especialidad.service";
import {Especialidad} from "../../especialidades/especialidad";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

import {
  BgColorDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
} from "@coreui/angular";
import {Ficha} from "../ficha";
import {PacienteService} from "../../pacientes/paciente.service";
import {Paciente} from "../../pacientes/paciente";
import {MedicoEspecialidad} from "../../medicos/medicoespe";
import {MedicoHorario} from "../../medicoHorario/medico-horario";
import {IntervaloHorario} from "../../medicoHorario/intervalo-horario";
import {MedicoEspecialidadService} from "../../medicos/medicoespe.service";
import {IntervaloHorarioService} from "../../medicoHorario/intervalo-horario.service";
import {MedicoHorarioService} from "../../medicoHorario/medico-horario.service";
import {DatosReservaFicha} from "./datos-reserva-ficha";

@Component({
  selector: 'app-agendar-ficha',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    BgColorDirective,
    CardBodyComponent,
    NgIf
  ],
  templateUrl: './agendar-ficha.component.html',
  styleUrl: './agendar-ficha.component.scss'
})
export class AgendarFichaComponent implements OnInit {

  agendarFichaForm!: FormGroup;

  fichas: Ficha[] = [];

  pacientes: Paciente[] = [];
  especialidades: Especialidad[] = [];
  medicosEspecialidad: MedicoEspecialidad[] = [];
  medicosHorarios: MedicoHorario[] = [];
  intervalos: IntervaloHorario[] = [];

  mensaje: string = '';

  constructor(private fb: FormBuilder,
              private fichaService: AgendarFichaService,
              private pacienteService: PacienteService,
              private especialidadService: EspecialidadService,
              private medicoEspecialidadService: MedicoEspecialidadService,
              private intervaloHorarioService: IntervaloHorarioService,
              private medicosHorariosService: MedicoHorarioService) {


  }

  ngOnInit() : void{
    this.initForm();
    this.cargarPacientes();
    this.cargarEspecialidades();
    this.cargarMedicosEspecialidad();
    this.cargarMedicosHorarios();
    this.cargarIntervalos();
  }

  initForm(): void {
    this.agendarFichaForm = this.fb.group({
      pacienteId: ['', [Validators.required]],
      especialidadId: ['', [Validators.required]],
      medicoId: ['', [Validators.required]],
      medicoHorarioId: ['', [Validators.required]],
      intervaloHorarioId: ['', [Validators.required]],
      fechaConsulta: ['', [Validators.required]],
    });
  }

  cargarPacientes(){
    this.pacienteService.getPacientes().subscribe({
      next: (data: Paciente[]) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    });
  }


  cargarEspecialidades(){
      this.especialidadService.listarEspecialidad().subscribe({
        next: (data: Especialidad[]) => {
          this.especialidades = data;
        },
        error: (error) => {
          console.error('Error al obtener especialidades:', error);
        }
      });

  }

  cargarMedicosEspecialidad(): void{
      this.medicoEspecialidadService.listarMedicoEspecialidad().subscribe({
        next: (data: MedicoEspecialidad[]) => {
          this.medicosEspecialidad = data;
        },
        error: (error) => {
          console.error('Error al obtener medicos:', error);
        }
      });
  }


  cargarMedicosHorarios(){
    this.medicosHorariosService.listarMedicoHorario().subscribe({
      next: (data: MedicoHorario[]) => {
        this.medicosHorarios = data;
      },
      error: (error) => {
        console.error('Error al obtener medicos:', error);
      }
    })
  }

  cargarIntervalos(){
    this.intervaloHorarioService.listarIntervalos().subscribe({
      next: (data: IntervaloHorario[]) => {
        this.intervalos = data;
      },
      error: (error) => {
        console.error('Error al obtener medicos:', error);
      }
    })
  }



  onSubmit(): void{
    if (this.agendarFichaForm.valid){
      const datos: DatosReservaFicha = this.agendarFichaForm.value;
      console.log("Datos a enviar: ", datos);
      this.fichaService.agendarFicha(datos).subscribe({
        next: (response: Ficha[]) => {
          this.fichas = response;
          this.mensaje = 'Ficha agendada correctamente';
          this.agendarFichaForm.reset();
        },
        error: (error) => {
          if (error.status === 400){
            this.mensaje = 'Error al agendar la ficha';
          }else if (error.status === 409){
            this.mensaje = 'Conflicto' + error.error;
          } else {
            this.mensaje = 'Error inisperado' + error.message;
          }
        },
      });
    } else {
      this.mensaje = 'Por favor, complete los campos requeridos';
    }
  }


}
