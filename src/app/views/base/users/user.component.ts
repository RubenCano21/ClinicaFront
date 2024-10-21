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

@Component({
    selector: 'app-cliente',
    templateUrl: 'user.component.html',
    standalone: true,
    imports: [TextColorDirective, CardComponent,  DashboardComponent,
      CardHeaderComponent, CardBodyComponent, RowComponent, forwardRef(() => ThemeColorComponent),
      AvatarComponent, ColComponent, IconDirective, ProgressComponent, TableDirective, FormUserComponent]
})
export class UserComponent implements OnInit, AfterViewInit {

  clientes: User[] = [];

  clienteSelected: User = new User();

  constructor(private clienteService: UserService  ) {
  }


  ngOnInit(): void {
    this.clienteService.findAll().subscribe(clientes => this.clientes = clientes);
    //this.clientes = this.clienteService.setCliente()
  }

  addCliente(cliente: User) : void {

    if (cliente.id > 0){
      this.clienteService.update(cliente).subscribe(clienteUpdate =>{
        this.clientes = this.clientes.map(user => {
            if (user.id == cliente.id){
              return {... clienteUpdate};
            }
            return user;
        })
      });
    }else  {
      this.clienteService.create(cliente).subscribe(clienteNew => {
        this.clientes = [...this.clientes, {... clienteNew}]
      })
    }
  }

  ngAfterViewInit(): void {
    //this.themeColors();
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

