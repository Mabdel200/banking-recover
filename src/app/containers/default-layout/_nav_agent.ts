import { INavData } from '@coreui/angular';

export const navItemsAgent: INavData[] = [
  {
    name: 'BANKING RECOVERING',
    url: '/dashboardAgent',
    iconComponent: { name: 'cil-speedometer' },
  },

  // Menu recouvrement
  {
    title: true,
    name: 'Gestion des Recouvrement'
  },
  {
    name: 'A propos',
    url: '/themeAgent/colors',
    iconComponent: { name: 'cil-notes' },

  },
  {
    name: 'Recouvrement en cycle',
    url: '/themeAgent/typography',
    iconComponent: { name: 'cil-notes' },
  },
  // Portefeuille Client
  {
    title: true,
    name: 'Portefeuille'
  },
  {
    name: 'Ajouter un dossier',
    url: '/formsAgent/add-folder',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Liste des dossiers',
    url: '/baseAgent/breadcrumbs',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Liste des dossiers actifs',
    url: '/baseAgent/cards',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Liste des dossiers expirer',
    url: '/baseAgent/carousel',
    iconComponent: { name: 'cil-notes' },
  },
 
//  {
//     name: 'Versement',
//     url: '/forms',
//     children: [
//       {
//         name: 'Ajouter un versement',
//         url: '/formsAgent/checks-radios',
//         iconComponent: { name: 'cil-bell' },
//       },
//        {
//         name: 'Liste des versements',
//         url: '/baseAgent/collapse',
//         iconComponent: { name: 'cil-bell' },
//       },
//       {
//         name: 'Sur-Endettement',
//         url: '/notificationsAgent',
//         iconComponent: { name: 'cil-bell' },
//       },
    
//     ]
//   },
  
];
