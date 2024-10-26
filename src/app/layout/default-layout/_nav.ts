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
    name: 'Gestion de Usuarios'
  },
  {
    name: 'Usuarios',
    url: '/usuarios',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-drop' },
    children: [
      {
        name: "Lista de Usuarios",
        url: '/usuarios/listar',
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
        url: '/pacientes/registrar',
        icon: 'nav-icon-bullet'
      },
      {
        name: "Listar Pacientes",
        url: '/pacientes/listar',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Actualizar Pacientes',
        url: '/pacientes/actualizar',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
    name: 'Bitacora',
    url: '/incio/bitacora',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Clientes',
    url: '/clientes',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: "Lista de Clientes",
        url: '/clientes/lista',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Registrar Clientes',
        url: '/clientes/register',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  {
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
  }

];
