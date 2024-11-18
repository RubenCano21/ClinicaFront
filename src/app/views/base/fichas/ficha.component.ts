import {Component, OnInit} from '@angular/core';
import {Ficha} from "./ficha";
import {FichaService} from "./ficha.service";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  TableColorDirective,
  TableDirective
} from "@coreui/angular";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ConsultorioService} from "../consultorios/consultorio.service";
import {Consultorio} from "../consultorios/consultorio";


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    NgForOf,
    DatePipe,
    TableDirective,
    TableColorDirective,
    NgIf
  ],
})
export class FichaComponent implements OnInit {

  fichas: Ficha[] = [ ];
  consultorios: Consultorio[] = [ ];

  constructor(private fichaService: FichaService,
              private consultorioService: ConsultorioService) { }

  ngOnInit(): void {
    this.getFichas();
    this.getConsultorio();
  }

  getFichas(): void {
    this.fichaService.listarFichas().subscribe({
      next: (data: Ficha[]) => {
        this.fichas = data;
      },
      error: (error) => {
        console.error('Error al obtener fichas:', error);
      }
    });
  }

  getConsultorio(){
    this.consultorioService.listarConsultorios().subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error al obtener consultorio:', error);
      }
    });
  }

}
