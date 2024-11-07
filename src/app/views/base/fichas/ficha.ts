import {Paciente} from "../pacientes/paciente";
import {Especialidad} from "../especialidades/especialidad";
import {Medico} from "../medicos/medico";

export interface Ficha {
  id: number;
  paciente: Paciente;
  especialidad: Especialidad;
  medico: Medico;
  //medicoHorario: MedicoHorario;
  //intervaloHorario: IntervalosHorario;
  fechaConsulta: string;  // Puede usar string o Date dependiendo de cómo manejes LocalDateTime en el backend
  cantDisponibles: number;
}
