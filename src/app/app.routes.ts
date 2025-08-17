import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home'),
  },
  {
    path: 'flashcards',
    loadComponent: () => import('./flashcards/flashcards'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
