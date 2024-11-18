import {Consultorio} from "../consultorios/consultorio";
import {Medico} from "../medicos/medico";
import {Horario} from "../horarios/horario";

export class MedicoHorario {
  id!: number;
  medico!: Medico;
  consultorio!: Consultorio;
  horario!: Horario;
  cantDisponibles!: number;

  medicoNombre?: string;
  consultorioNombre?: string;
  horarioDia?: string;
  horarioHoraInicio?: string;
  horarioHoraFin?: string;
}
