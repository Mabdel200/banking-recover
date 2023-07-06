import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'BANKING RECOVER',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'badge rounded-pill text-bg-dark',
    //   text: 'NEW'
    // }
  },
// Menu Users
{
  title: true,
  name: 'Gestion des Utilisateurs',
  iconComponent: { name: 'cil-user' },

},
{
  name: 'Ajouter',
  url: '/forms/add-user',
  iconComponent: { name: 'cil-notes' },

},
{
  name: 'Voir Liste',
  url: '/base/list-users',
  iconComponent: { name: 'cil-notes' },

},
// Menu Cycle

// {
//   name: 'Etat des cycles',
//   url: '/base/list-cycles',
//   iconComponent: { name: 'cil-notes' },

// },

  // Menu recouvrement
  {
    title: true,
    name: 'Gestion des Recouvrement'
  },
  {
    name: 'A propos',
    url: '/theme/colors',
    iconComponent: { name: 'cil-notes' },

  },
  {
    name: 'Recouvrement en cycle',
    url: '/theme/typography',
    iconComponent: { name: 'cil-notes' },
    linkProps: { fragment: 'someAnchor' }
  },
  {
    name: 'Wallet',
    url: '/base',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Ajouter un dossier',
        url: '/forms/add-folder'
      },
      {
        name: 'Liste de Dossier',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Liste des dossiers par cycle',
        url: '/base/cards'
      },
      {
        name: 'Liste des dossiers expirer',
        url: '/base/carousel'
      },
     
    ]
  },
  {
    name: 'Gestions de Promesse',
    url: '/buttons',
    iconComponent: { name: 'cil-notes' },

    children: [
      {
        name: 'Dossier ',
        url: '/buttons/buttons'
      },

    ]
  },
 {
    name: 'Tous les Dossier',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
    
      {
        name: 'Dossiers à traité',
        url: '/forms/checks-radios'
      },
    
    ]
  },

  {
    name: 'Surrendettement',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },

    ]
  },
  /*{
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },*/
  // {
  //   title: true,
  //   name: 'Deconnexion'
  // },
  // {
  //   name: 'Se Deconnecter IcI',
  //   url: '/register'
  // },

];
