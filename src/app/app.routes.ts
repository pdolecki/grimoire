import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flashcards',
    loadComponent: () => import('./flashcards/flashcards'),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
