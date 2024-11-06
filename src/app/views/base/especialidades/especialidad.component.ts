import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { EspecialidadService } from './especialidad.service'; 
import { Especialidad } from './especialidad'; 

@Component({
    selector: 'app-consultorio',
    templateUrl: './especialidad.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class EspecialidadComponent {
    especialidadForm: FormGroup;

    constructor(private fb: FormBuilder, private especialidadService: EspecialidadService) {
        this.especialidadForm = this.fb.group({
            nombre: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.especialidadForm.valid) {
            const especialidad = this.especialidadForm.value;
            this.especialidadService.registrarEspecialidad(especialidad).subscribe(
                (response: Especialidad) => { // Especifica el tipo aquí
                    console.log('Especialidad registrado:', response);
                    this.especialidadForm.reset(); // Reinicia el formulario después de registrar
                },
                (error: any) => { // Especifica el tipo aquí también
                    console.error('Error al registrar la Especialidad', error);
                }
            );
        }
    }
}
