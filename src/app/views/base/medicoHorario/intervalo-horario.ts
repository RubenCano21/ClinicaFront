import {MedicoHorario} from "./medico-horario";
import {Ficha} from "../fichas/ficha";

export class IntervaloHorario {

  id!: number;

  horaInicio!: string;
  horaFin!: string;

  medicoHorario!: MedicoHorario;

  estado!: string;

  ficha!: Ficha;
}
