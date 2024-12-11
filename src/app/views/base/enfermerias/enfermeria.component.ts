import {Component, OnInit} from '@angular/core';
import {Enfermeria, Sintoma} from "./enfermeria";
import {EnfermeriaService} from "./enfermeria.service";
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-enfermeria',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './enfermeria.component.html'
})
export class EnfermeriaComponent implements OnInit {

  enfermerias: Enfermeria[] = [];

  // enfermeria: Enfermeria = new Enfermeria(1,[],[]);
  //
  // sintomasDisp: Sintoma[] =  [
  //   new Sintoma('Dolor de cabeza'),
  //   new Sintoma('Fiebre'),
  //   new Sintoma('Tos'),
  //   new Sintoma('Dolor de garganta'),
  //   new Sintoma('Dolor de estómago'),
  //   new Sintoma('Fatiga'),
  // ];
  // medicoHorarioId: any;

  constructor(private enfermeriaService: EnfermeriaService) {
    //this.enfermeria.sintomas = this.sintomasDisp.map((s) => new Sintoma(s.nombre))
  }

  ngOnInit(): void {
    this.listarEnfermerias();
  }

  listarEnfermerias() {
    this.enfermeriaService.listarEnfermerias().subscribe({
      next: (data: Enfermeria[]) => {
        this.enfermerias = data;
      },
      error: (error) => {
        console.error('Error al listar las enfermerias:', error);
      }
    });
  }


  onSubmit() {
    // this.enfermeriaService.registrarEnfermeria(this.enfermeria).subscribe({
    //   next: (data: Enfermeria) => {
    //     console.log('Enfermeria registrada:', data);
    //   },
    //   error: (error) => {
    //     console.error('Error al registrar la enfermeria:', error);
    //   }
    // });
  }

  filtrarPorMedico() {

  }
}
