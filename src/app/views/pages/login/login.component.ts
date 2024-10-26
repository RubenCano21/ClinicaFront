import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { RouterLink, Router } from "@angular/router";
import { UsuarioService } from '../../../usuarios/service/usuario.service'; 
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent, 
    RowComponent, 
    ColComponent, 
    CardGroupComponent, 
    TextColorDirective, 
    CardComponent, 
    CardBodyComponent, 
    FormDirective, 
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective, 
    FormControlDirective, 
    ButtonDirective,
    NgStyle, 
    RouterLink,
    ReactiveFormsModule
  ]
})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder .group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.usuarioService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Respuesta del servidor:', response); // Verifica la respuesta del login
          if (response.token  ) {
            this.usuarioService.saveToken(response.token);
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'No tienes privilegios de administrador.';
          }
        },
        error => {
          console.error('Error during login:', error);
        }
      );
    }
  }
}