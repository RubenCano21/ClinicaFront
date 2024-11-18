export interface DatosReservaFicha {

  pacienteId: number;
  especialidadId: number;
  medicoId: number;
  medicoHorarioId: number;
  intervaloHorarioId: number;
  fechaConsulta: string; // Formato: "YYYY-MM-DDTHH:mm:ss"
}
