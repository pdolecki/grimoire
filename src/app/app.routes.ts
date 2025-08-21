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
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
