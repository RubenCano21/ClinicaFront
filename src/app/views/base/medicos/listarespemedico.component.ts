  import { Component, OnInit } from '@angular/core';
  import { MedicoEspecialidadService } from './medicoespe.service';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { MedicoEspecialidad } from './medicoespe';
  import {
  BgColorDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent, TableColorDirective
} from "@coreui/angular";

  @Component({
      selector: 'app-listarespemedico',
      templateUrl: './listarespemedico.component.html',
      standalone: true,
    imports: [FormsModule, CommonModule, BgColorDirective, CardBodyComponent, CardComponent,
      CardFooterComponent, CardHeaderComponent, TableColorDirective]
  })
  export class ListarEspeMedicoComponent implements OnInit {

      medicosEspecialidades: MedicoEspecialidad[] = [];

    totalItems: number = 0;
    currentPage: number = 0;
    pageSize: number = 10;
    nombreFiltro: string = '';

      constructor(private medicoEspecialidadService: MedicoEspecialidadService) {}

      ngOnInit(): void {
          this.cargarMedicosEspecialidades();
      }

      cargarMedicosEspecialidades(): void {
        this.medicoEspecialidadService.getMedicosEspecialidades(this.currentPage, this.pageSize, this.nombreFiltro).subscribe(
          (data) => {
            this.medicosEspecialidades = data.content;
            this.totalItems = data.totalElements;
          },
          (error) => {
            console.error('Error al cargar los médicos especialidades', error);
          }
        );
      }

    cambiarPagina(page: number): void {
      this.currentPage = page;
      this.cargarMedicosEspecialidades();
    }

    aplicarFiltro(): void {
      this.currentPage = 0;
      this.cargarMedicosEspecialidades();
    }
  }
