import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ConsultorioService } from './consultorio.service'; 
import { Consultorio } from './consultorio'; 

@Component({
    selector: 'app-consultorio',
    templateUrl: './consultorio.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class ConsultorioComponent {
    consultorioForm: FormGroup;

    constructor(private fb: FormBuilder, private consultorioService: ConsultorioService) {
        this.consultorioForm = this.fb.group({
            nombre: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.consultorioForm.valid) {
            const consultorio = this.consultorioForm.value;
            this.consultorioService.registrarConsultorio(consultorio).subscribe(
                (response: Consultorio) => { // Especifica el tipo aquí
                    console.log('Consultorio registrado:', response);
                    this.consultorioForm.reset(); // Reinicia el formulario después de registrar
                },
                (error: any) => { // Especifica el tipo aquí también
                    console.error('Error al registrar consultorio', error);
                }
            );
        }
    }
}
