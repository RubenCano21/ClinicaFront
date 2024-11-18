import {Component, OnInit} from '@angular/core';
import {PacienteService} from "./paciente.service";
import {FormsModule} from "@angular/forms";
import {DecimalPipe, NgForOf} from "@angular/common";
import {Paciente} from "./paciente";
import {
  BgColorDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  TableColorDirective
} from "@coreui/angular";

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    DecimalPipe,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    TableColorDirective,
    BgColorDirective
  ],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent implements OnInit {

  pacientes: Paciente[] = [];
  totalItems: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;
  nombreFiltro: string = '';

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes():void {
    this.pacienteService.getPacientes(this.currentPage, this.pageSize, this.nombreFiltro).subscribe(
      (data) => {
        this.pacientes = data.content;
        this.totalItems = data.totalElements;
      },
      (error) => {
        console.error('Error al cargar los pacientes', error);
      }
    );
  }

  cambiarPagina(page: number): void {
    this.currentPage = page;
    this.cargarPacientes();
  }

  aplicarFiltro(): void {
    this.currentPage = 0;
    this.cargarPacientes();
  }

}
