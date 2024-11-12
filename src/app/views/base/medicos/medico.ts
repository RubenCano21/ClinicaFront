import { Especialidad } from "../especialidades/especialidad";

export class Medico {
    id!: number;
    ci!: number;
    nombre!: string;
    apellido!: string;
    email!: string;
    telefono!: string;
    sexo!: string;
    especialidad?: Especialidad;
}