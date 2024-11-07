import {Medico} from "../medicos/medico";
import {Horario} from "../horarios/horario";
import {Consultorio} from "../consultorios/consultorio";

export class MedicoHorario {

  id!: number;
  medico!: Medico;
  consultorio!: Consultorio;
  horario!: Horario;
  cantDisponibles!: number;
}
