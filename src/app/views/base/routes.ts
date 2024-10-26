import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'accordion',
        loadComponent: () => import('./accordion/accordions.component').then(m => m.AccordionsComponent),
        data: {
          title: 'Accordion'
        }
      },
      {
        path: 'register',
        loadComponent: () => import('./users/formUser.component').then(m => m.FormUserComponent),
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'lista',
        loadComponent: () => import('./users/user.component').then(m => m.UserComponent),
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'listar',
        loadComponent: () => import('./users/fusers.component').then(m => m.UserComponent),
        data: {
          title: 'Usuarios'
        }
      },
      {
        path: 'registrar',
        loadComponent: () => import('./pacientes/paciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
        }
      },
      {
        path: 'listar',
        loadComponent: () => import('./pacientes/editpaciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
        }
      },
      {
        path: 'actualizar',
        loadComponent: () => import('./pacientes/fpaciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
        }
      },
      {
        path: 'cards',
        loadComponent: () => import('./cards/cards.component').then(m => m.CardsComponent),
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'list-group',
        loadComponent: () => import('./list-groups/list-groups.component').then(m => m.ListGroupsComponent),
        data: {
          title: 'List Group'
        }
      },
      {
        path: 'pagination',
        loadComponent: () => import('./paginations/paginations.component').then(m => m.PaginationsComponent),
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
        data: {
          title: 'Placeholder'
        }
      },
      {
        path: 'tables',
        loadComponent: () => import('./tables/tables.component').then(m => m.TablesComponent),
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        loadComponent: () => import('./tabs/tabs.component').then(m => m.AppTabsComponent),
        data: {
          title: 'Tabs'
        }
      }
    ]
  }
];


