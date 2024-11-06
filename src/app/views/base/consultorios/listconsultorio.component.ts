import { Component, OnInit } from '@angular/core';
import { ConsultorioService } from './consultorio.service';
import { Consultorio } from './consultorio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-consultorios',
  templateUrl: './listconsultorio.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ConsultorioComponent implements OnInit {
  consultorio: Consultorio[] = [];

  constructor(private consultorioService: ConsultorioService) {}

  ngOnInit(): void {
    this.obtenerConsultorios();
  }

  obtenerConsultorios(): void {
    this.consultorioService.listarConsultorios().subscribe(
      (data) => {
        this.consultorio = data; // Asigna la respuesta a la variable consultorios
      },
      (error) => {
        console.error('Error al obtener consultorios', error);
      }
    );
  }

  actualizarConsultorio(id: number): void {
    console.log('Actualizar consultorio con ID:', id);
    // Aquí puedes añadir la lógica para actualizar el consultorio
  }

}

