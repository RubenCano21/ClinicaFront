export class Sintoma {
  nombre: string;
  presente: boolean;

  constructor(nombre: string, presente: boolean=false) {
    this.nombre = nombre;
    this.presente = presente;
  }
}

export class Patologia {
  nombre: string;
  presente: boolean;

  constructor(nombre: string, presente: boolean=false) {
    this.nombre = nombre;
    this.presente = presente;
  }
}


export class Enfermeria {
  id?: number;
  fichaMedica: number;
  sintomas: Sintoma[];
  patologias: Patologia[];

  constructor(fichaMedica: number, sintomas: Sintoma[]= [], patologias: Patologia[]=[]) {
    this.fichaMedica = fichaMedica;
    this.sintomas = sintomas;
    this.patologias = patologias;
  }
}
