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

  fichas: Ficha[] = [];


  constructor(private fichaService: FichaService) { }

  ngOnInit(): void {
    this.getFichas();
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

}
