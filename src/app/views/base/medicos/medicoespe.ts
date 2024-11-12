    import { Medico } from '../medicos/medico';
    import { Especialidad } from '../especialidades/especialidad';

    export class MedicoEspecialidad {
        id!: number;
        medico!: Medico;  // El objeto Medico
        especialidad!: Especialidad;  // El objeto Especialidad  
    }
    