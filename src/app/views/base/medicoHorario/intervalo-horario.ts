import {MedicoHorario} from "./medico-horario";
import {Fichas} from "../fichas/fichas";

export class IntervaloHorario {

  id!: number ;

  horaInicio!: string;
  horaFin!: string;

  medicoHorario!: MedicoHorario;

  estado!: string;

  ficha!: Fichas;
}
