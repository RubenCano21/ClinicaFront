import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from './medico.service';
import { Medico } from './medico';
import { FormsModule,NgForm} from '@angular/forms';

@Component({
  selector: 'app-actualizar-medico',
  templateUrl: './editmedico.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class MedicoComponent implements OnInit {
  medico: Medico = {
    id: 0,
    ci: 0,
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    sexo: '',
    //especialidades: []
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el ID del parámetro de ruta
    this.getMedico(id);
  }

  getMedico(id: number): void {
    this.medicoService.getMedicos().subscribe((data: Medico[]) => {
      this.medico = data.find(p => p.id === id) || this.medico; // Buscar el paciente por ID
    });
  }

  actualizarMedicoss(): void {
    console.log('Actualizando medicos...', this.medico); // Verifica que el paciente se está pasando correctamente.
    this.medicoService.actualizarMedicos(this.medico).subscribe(
        () => {
            console.log('Medico actualizado correctamente');
            this.router.navigate(['/medicos/lista-medicos']);
        },
        (error) => {
            console.error('Error al actualizar medico', error); // Captura el error aquí
            alert('No se pudo actualizar el medico'); // Muestra un mensaje de error
        }
    );
 }

}
