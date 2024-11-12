import {Paciente} from "../pacientes/paciente";
import {Medico} from "../medicos/medico";
import {Especialidad} from "../especialidades/especialidad";
import {MedicoHorario} from "../medicoHorario/medico-horario";
import {IntervaloHorario} from "../medicoHorario/intervalo-horario";

export class RegistrarFicha {

  id!: number;
  paciente!: Paciente;
  medico!: Medico;
  especialidad!: Especialidad;
  medicoHorario!: MedicoHorario;
  intervaloHorario!: IntervaloHorario;
  fechaConsulta!: Date;
  cantDisponibles!: number;
}
