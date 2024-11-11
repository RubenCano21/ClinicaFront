import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { FormsModule,NgForm} from '@angular/forms';
import {
  BgColorDirective,
  BorderDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent
} from "@coreui/angular";

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './epaciente.component.html',
  standalone: true,
  imports: [FormsModule, CardComponent, CardBodyComponent, CardHeaderComponent, BgColorDirective, BorderDirective]
})
export class PacienteComponent implements OnInit {
  paciente: Paciente = {
    id: 0,
    ci: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    email: '',
    telefono: '',
    sexo: '',
    direccion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el ID del parámetro de ruta
    this.getPaciente(id);
  }

  getPaciente(id: number): void {
    this.pacienteService.getPacientes().subscribe((data: Paciente[]) => {
      this.paciente = data.find(p => p.id === id) || this.paciente; // Buscar el paciente por ID
    });
  }

  actualizarPacientess(): void {
    console.log('Actualizando paciente...', this.paciente); // Verifica que el paciente se está pasando correctamente.
    this.pacienteService.actualizarPacientes(this.paciente).subscribe(
        () => {
            console.log('Paciente actualizado correctamente');
            this.router.navigate(['/pacientes/lista-pacientes']);
        },
        (error) => {
            console.error('Error al actualizar paciente', error); // Captura el error aquí
            alert('No se pudo actualizar el paciente'); // Muestra un mensaje de error
        }
    );
}


}
