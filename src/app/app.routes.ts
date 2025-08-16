import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home'),
  },
  {
    path: 'flashcards',
    children: [
      {
        path: '',
        loadComponent: () => import('./flashcards/flashcards'),
      },
      {
        path: 'learn',
        loadComponent: () => import('./flashcards/ui/learn'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
