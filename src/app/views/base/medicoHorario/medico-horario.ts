export class MedicoHorario {
  id!: number;
  medicoId!: number;  
  consultorioId!: number;  
  horarioId!: number; 
  cantDisponibles!: number;

  medicoNombre?: string;
  consultorioNombre?: string;
  horarioDia?: string;
  horarioHoraInicio?: string;
  horarioHoraFin?: string;
}
