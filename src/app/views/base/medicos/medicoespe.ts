    import { Medico } from './medico';
    import { Especialidad } from '../especialidades/especialidad';

    export class MedicoEspecialidad {
        id!: number;
        medico!: Medico;  // El objeto Medico
        especialidad!: Especialidad;  // El objeto Especialidad

        // Propiedades adicionales
        // medicoNombre?: string;
        // medicoAplellido?: string;
        // especialidadNombre?: string;
    }
