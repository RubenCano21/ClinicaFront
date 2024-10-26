import { AfterViewInit, Component, HostBinding, Input, OnInit, forwardRef } from '@angular/core';
import { NgClass } from '@angular/common';

import {
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    AvatarComponent, ProgressComponent, TableDirective
} from '@coreui/angular';
import {IconDirective} from "@coreui/icons-angular";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {User} from "./user";
import {UserService} from "./user.service";
import {FormUserComponent} from "./formUser.component";
import { Usuario } from 'src/app/usuarios/models/usuario';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cliente',
    templateUrl: 'fusers.component.html',
    standalone: true,
    imports: [CommonModule,TextColorDirective, CardComponent,  DashboardComponent,
      CardHeaderComponent, CardBodyComponent, RowComponent, forwardRef(() => ThemeColorComponent),
      AvatarComponent, ColComponent, IconDirective, ProgressComponent, TableDirective, FormUserComponent]
})
export class UserComponent implements OnInit, AfterViewInit {

  clientes: User[] = [];

  ngAfterViewInit(): void {
    // Implement any logic you need here
  }

  clienteSelected: User = new User();

  constructor(private ClienteService: UserService  ) {}

  ngOnInit(): void {
    this.ClienteService.findAll().subscribe(
        (usuarios) => {
          this.clientes = usuarios; 
          console.log('Usuarios obtenidos:', usuarios);
        }, // Asignar la lista de usuarios a la variable clientes
        (error) => {
            console.error('Error al obtener los usuarios', error); // Manejo de errores
        }
    );
  }

  
}

@Component({
    selector: 'app-theme-color',
    template: `
    <c-col xl="2" md="4" sm="6" xs="12" class="my-4 ms-4">
      <div [ngClass]="colorClasses" style="padding-top: 75%;"></div>
      <ng-content></ng-content>
    </c-col>
  `,
    standalone: true,
    imports: [ColComponent, NgClass],
})
export class ThemeColorComponent implements OnInit {
  @Input() color = '';
  public colorClasses = {
    'theme-color w-75 rounded mb-3': true
  };

  @HostBinding('style.display') display = 'contents';

  ngOnInit(): void {
    this.colorClasses = {
      ...this.colorClasses,
      [`bg-${this.color}`]: !!this.color
    };
  }
}

