import {MedicoHorario} from "./medico-horario";
import {Ficha} from "../fichas/ficha";

export interface IntervaloHorario {

  id: number;
  horaInicio: string; // Formato "HH:mm:ss"
  horaFin: string;    // Formato "HH:mm:ss"
  estado: string;     // Enum: LIBRE, OCUPADO
  medicoHorario: {
    id: number;
    medico: {
      id: number;
      nombre: string;
    };
  };

}
