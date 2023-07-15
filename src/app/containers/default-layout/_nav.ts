import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'BANKING RECOVERING',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
// Menu Users
{
  title: true,
  name: 'Gestion des Utilisateurs',
},
{
  name: 'Ajouter',
  url: '/forms/add-user',
  iconComponent: { name: 'cil-user' },

},
{
  name: 'Voir Liste',
  url: '/base/list-users',
  iconComponent: { name: 'cil-notes' },

},

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
  // Portefeuille Client
  {
    title: true,
    name: 'Portefeuille'
  },
  {
    name: 'Ajouter un dossier',
    url: '/forms/add-folder',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Liste des dossiers',
    url: '/base/breadcrumbs',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Liste des dossiers actifs',
    url: '/base/cards',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Liste des dossiers expirés',
    url: '/base/carousel',
    iconComponent: { name: 'cil-notes' },
  },
 
//  {
//     name: 'Versement',
//     url: '/forms',
//     children: [
//       {
//         name: 'Ajouter un versement',
//         url: '/forms/checks-radios',
//         iconComponent: { name: 'cil-bell' },
//       },
//        {
//         name: 'Liste des versements',
//         url: '/base/collapse',
//         iconComponent: { name: 'cil-bell' },
//       },
//       {
//         name: 'Sur-Endettement',
//         url: '/notifications',
//         iconComponent: { name: 'cil-bell' },
//       },
    
//     ]
//   },

 
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
