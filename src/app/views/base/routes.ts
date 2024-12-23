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
        path: 'lista-usuarios',
        loadComponent: () => import('./users/fusers.component').then(m => m.UserComponent),
        data: {
           title: 'Usuarios'
         }
      },

      {
        path: 'registrar-paciente',
        loadComponent: () => import('./pacientes/paciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
        }
      },

      {
        path: 'lista-pacientes',
        loadComponent: () => import('./pacientes/fpaciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
         }
      },
      {
        path: 'lista-pagina',
        loadComponent: () => import('./pacientePagina/paciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
         }
      },

      {
        path: 'actualizar-paciente/:id',
        loadComponent: () => import('./pacientes/epaciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Pacientes'
        }
      },

      {
        path: 'registrar-medico',
        loadComponent: () => import('./medicos/medico.component').then(m => m.MedicoComponent),
        data: {
          title: 'Medicos'
        }
      },

      {
        path: 'lista-medicos',
        loadComponent: () => import('./medicos/listmedico.component').then(m => m.MedicoComponent),
        data: {
          title: 'Medicos'
         }
      },

      {
        path: 'actualizar-medico/:id',
        loadComponent: () => import('./medicos/editmedico.component').then(m => m.MedicoComponent),
        data: {
          title: 'Medicos'
        }
      },

      {
        path: 'asignar-medico',
        loadComponent: () => import('./medicos/espemedico.component').then(m => m.MedicoEspecialidadComponent),
        data: {
          title: 'Medicos'
        }
      },

      {
        path: 'listar-medico-especialidad',
        loadComponent: () => import('./medicos/listarespemedico.component').then(m => m.ListarEspeMedicoComponent),
        data: {
          title: 'Medicos'
        }
      },

      {
        path: 'registrar-consultorio',
        loadComponent: () => import('./consultorios/consultorio.component').then(m => m.ConsultorioComponent),
        data: {
          title: 'Consultorios'
        }
      },

      {
        path: 'lista-consultorios',
        loadComponent: () => import('./consultorios/listconsultorio.component').then(m => m.ConsultorioComponent),
        data: {
          title: 'Consultorios'
        }
      },

      {
       path: 'registrar-especialidad',
        loadComponent: () => import('./especialidades/especialidad.component').then(m => m.EspecialidadComponent),
        data: {
          title: 'Especialidades'
        }
      },
      {
        path: 'lista-especialidades',
        loadComponent: () => import('./especialidades/listespecialidad.component').then(m => m.EspecialidadComponent),
        data: {
          title: 'Especialidades'
        }
      },

      {
       path: 'registrar-horario',
       loadComponent: () => import('./horarios/horario.component').then(m => m.HorarioComponent),
       data: {
         title: 'Horarios'
        }
      },

      {
       path: 'lista-horarios',
        loadComponent: () => import('./horarios/listhorario.component').then(m => m.HorarioComponent),
        data: {
          title: 'Horarios'
        }
      },

      {
        path: 'listar-horario-medico',
        loadComponent: () => import('./medicoHorario/listar-medico-horario.component').then(m => m.ListarComponent),
        data: {
          title: 'MedicosHorarios'
        }
      },

      {
        path: 'registrar-horario-medico',
        loadComponent: () => import ('./medicoHorario/registrar-medico-horario.component').then(m => m.MedicoHorarioComponent),
        data: {
          title: 'MedicosHorarios'
        }
      },

      {
        path: 'generar-intervalos',
        loadComponent: () => import('./medicoHorario/intervalo-horario.component').then(m => m.IntervaloHorarioComponent),
        data: {
          title: 'Intervalos de Horarios'
        }
      },

      {
        path: 'listar-fichas',
        loadComponent: () => import('./fichas/ficha.component').then(m => m.FichaComponent),
        data: {
          title: 'Fichas'
        }
      },
      // {
      //   path: 'agendar-fichas',
      //   loadComponent: () => import('./fichas/registrar-ficha.component').then(m => m.RegistrarFichaComponent),
      //   data: {
      //     title: 'Fichas'
      //   }
      // },
      {
        path: 'agendar-fichas',
        loadComponent: () => import('./fichas/agendar-ficha/agendar-ficha.component').then(m => m.AgendarFichaComponent),
        data: {
          title: 'Fichas'
        }
      },
      {
        path: 'enfermeria',
        loadComponent: () => import('./enfermerias/enfermeria.component').then(m => m.EnfermeriaComponent),
        data: {
          title: 'Enfermeria'
        }
      },
      {
        path: 'chatbot',
        loadComponent: () => import('./chatbot/chatbot.component').then(m => m.ChatbotComponent),
        data: {
          title: 'Chatbot'
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


