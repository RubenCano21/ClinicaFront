import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info'
    //   //text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Administración'
  },
  {
    name: 'Usuarios',
    url: '/usuarios',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Lista de Usuarios",
        url: '/usuarios/lista-usuarios',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Pacientes',
    url: '/pacientes',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Registrar Pacientes",
        url: '/pacientes/registrar-paciente',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Pacientes',
        url: '/pacientes/lista-pacientes',
        icon: 'nav-icon-bullet'
      },
      {
        name: "Actualizar Pacientes",
        url: '/pacientes/actualizar-paciente/:id',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Medicos',
    url: '/medicos',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Registrar Medicos",
        url: '/medicos/registrar-medico',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Medicos',
        url: '/medicos/lista-medicos',
        icon: 'nav-icon-bullet'
      },
      {
        name: "Actualizar Medicos",
        url: '/medicos/actualizar-medico/:id',
        icon: 'nav-icon-bullet'
      },
      {
        name: "Asignar Medicos",
        url: '/medicos/asignar-medico',
        icon: 'nav-icon-bullet'
      },
      {
        name: "listar Medicos",
        url: '/medicos/listar-medico-especialidad',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Consultorios',
    url: '/consultorios',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Registrar Consultorios",
        url: '/consultorios/registrar-consultorio',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Consultorios',
        url: '/consultorios/lista-consultorios',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Especialidades',
    url: '/especialidades',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Registrar Especialidades",
        url: '/especialidades/registrar-especialidad',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Especialidades',
        url: '/especialidades/lista-especialidades',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    name: 'Horarios',
    url: '/horarios',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Registrar Horarios",
        url: '/horarios/registrar-horario',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Lista de Horarios',
        url: '/horarios/lista-horarios',
        icon: 'nav-icon-bullet'
      },
    ]
  },

  {
    title: true,
    name: 'Fichas'
  },

  {
    name: 'MedicosHorarios',
    url: '/medicos-horarios',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: "Ver Horarios",
        url: '/medicos-horarios/listar-horario-medico',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Asignar Horarios',
        url: '/medicos-horarios/registrar-horario-medico',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Intervalos de Horarios',
        url: '/medicos-horarios/generar-intervalos',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  /*{
    name: 'Trámites',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },

      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Carousel',
      //   url: '/base/carousel',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse',
      //   icon: 'nav-icon-bullet'
      // },
      {
        name: 'List Group',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs',
      //   icon: 'nav-icon-bullet'
      // },
      {
        name: 'Pagination',
        url: '/base/pagination',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  }*/

];
