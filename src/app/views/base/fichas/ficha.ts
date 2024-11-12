import {Paciente} from "../pacientes/paciente";
import {Especialidad} from "../especialidades/especialidad";
import {Medico} from "../medicos/medico";
import {MedicoHorario} from "../medicoHorario/medico-horario";
import {IntervaloHorario} from "../medicoHorario/intervalo-horario";


export class Ficha {

  id!:number;
  paciente!: Paciente;
  medico!: Medico;
  especialidad!: Especialidad;
  medicoHorario!: MedicoHorario;
  intervaloHorario!: IntervaloHorario;
  fechaConsulta!: Date;
  cantDisponibles!: number;
}
