import { Component } from '@angular/core';
import {Enfermeria, Sintoma} from "./enfermeria";
import {EnfermeriaService} from "./enfermeria.service";

@Component({
  selector: 'app-enfermeria',
  standalone: true,
  imports: [],
  templateUrl: './enfermeria.component.html'
})
export class EnfermeriaComponent {

  enfermeria: Enfermeria = new Enfermeria(1,[],[]);

  // sintomasDisp = Sintoma = [
  //   new Sintoma('Dolor de cabeza'),
  //   new Sintoma('Fiebre'),
  //   new Sintoma('Tos'),
  //   new Sintoma('Dolor de garganta'),
  //   new Sintoma('Dolor de estómago'),
  //   new Sintoma('Fatiga'),
  // ];
  //
  // constructor(private enfermeriaService: EnfermeriaService) {
  //   this.enfermeria.sintomas = this.sintomasDisp.map((s) => new Sintoma(s.nombre))
  // }
  //
  // onSubmit() {
  //   this.enfermeriaService.registrarEnfermeria(this.enfermeria).subscribe({
  //     next: (data: Enfermeria) => {
  //       console.log('Enfermeria registrada:', data);
  //     },
  //     error: (error) => {
  //       console.error('Error al registrar la enfermeria:', error);
  // }
  // });
  // }

}
