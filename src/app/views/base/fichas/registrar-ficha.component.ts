import {Component, OnInit} from '@angular/core';
import {Ficha} from "./ficha";
import {FichaService} from "./ficha.service";
import {RegistrarFichaService} from "./registrar-ficha.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {RegistrarFicha} from "./registrar-ficha";
import {Paciente} from "../pacientes/paciente";
import {Medico} from "../medicos/medico";
import {Especialidad} from "../especialidades/especialidad";
import {MedicoHorario} from "../medicoHorario/medico-horario";
import {IntervaloHorario} from "../medicoHorario/intervalo-horario";
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormLabelDirective,
  FormSelectDirective, RowComponent
} from "@coreui/angular";
import {EspecialidadService} from "../especialidades/especialidad.service";
import {MedicoService} from "../medicos/medico.service";
import {MedicoHorarioService} from "../medicoHorario/medico-horario.service";
import {IntervaloHorarioService} from "../medicoHorario/intervalo-horario.service";

@Component({
  selector: 'app-registrar-ficha',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ColComponent,
    FormLabelDirective,
    FormSelectDirective,
    ButtonDirective,
    NgForOf,
    RowComponent
  ],
  templateUrl: './registrar-ficha.component.html'
})
export class RegistrarFichaComponent implements OnInit {

  ficha: RegistrarFicha[] = [];
  especialidades: Especialidad[] = [];
  medicos: Medico[] = [];
  medicoHorario: MedicoHorario[] = [];
  intervalos: IntervaloHorario[] = [];

  constructor(private fichaService: FichaService,
              private registrarFicha: RegistrarFichaService,
              private especialidadService: EspecialidadService,
              private medicoService: MedicoService,
              private medicoHorarioService: MedicoHorarioService,
              private intervaloService: IntervaloHorarioService) { }

  ngOnInit() {
    this.getFichas();
    this.getEspecialidades();
    this.getMedicos();
    this.getMedicoHorario();
    this.getIntervalos();
  }

  getFichas() {
    this.fichaService.listarFichas().subscribe({
      next: (data: Ficha[]) => {
        this.ficha = data;
      },
      error: (error) => {
        console.error('Error al obtener fichas:', error);
      }
    });
  }


  asignarFicha(form: NgForm): void {
    const formValue = form.value;
    const nuevaFicha : RegistrarFicha = {
      id: 0,
      paciente: formValue.paciente,
      medico: formValue.medico,
      especialidad: formValue.especialidad,
      medicoHorario: formValue.medicoHorario,
      intervaloHorario: formValue.intervaloHorario,
      fechaConsulta: formValue.fechaConsulta,
      cantDisponibles: formValue.cantDisponibles
    };


    this.registrarFicha.registrarFicha(this.ficha).subscribe({
      next: (data: any) => {
        console.log('Ficha registrada:', data);
        this.getFichas();
      },
      error: (error) => {
        console.error('Error al registrar ficha:', error);
      }
    })
  }

  getEspecialidades() {
    this.especialidadService.listarEspecialidad().subscribe({
      next: (data: Especialidad[]) => {
        this.especialidades = data;
      },
      error: (error) => {
        console.error('Error al obtener especialidades:', error);
      }
    });
  }

  getMedicos() {
    this.medicoService.getMedicos().subscribe({
      next: (data: Medico[]) => {
        this.medicos = data;
      },
      error: (error) => {
        console.error('Error al obtener medicos:', error);
      }
    });
  }

  getMedicoHorario() {
    this.medicoHorarioService.listarMedicoHorario().subscribe({
      next: (data: MedicoHorario[]) => {
        this.medicoHorario = data;
      },
      error: (error) => {
        console.error('Error al obtener medicos:', error);
      }
    });
  }

  getIntervalos() {
    this.intervaloService.listarIntervalos().subscribe({
      next: (data: IntervaloHorario[]) => {
        this.intervalos = data;
      },
      error: (error) => {
        console.error('Error al obtener intervalos:', error);
      }
    });
  }


}
