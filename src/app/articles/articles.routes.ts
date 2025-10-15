// app/features/articles/articles.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./articles').then((m) => m.Articles),
  },
  {
    path: 'angular-20-signals',
    loadComponent: () =>
      import('./articles/angular-20-signals').then(
        (m) => m.PostAngular20Signals,
      ),
  },
  {
    path: 'zoneless-change-detection',
    loadComponent: () =>
      import('./articles/zoneless-change-detection').then(
        (m) => m.PostZoneless,
      ),
  },
  {
    path: 'designing-shared-ui',
    loadComponent: () =>
      import('./articles/designing-shared-ui').then(
        (m) => m.PostDesigningSharedUi,
      ),
  },
  {
    path: 'angular-habits-for-senior-developers',
    loadComponent: () =>
      import('./articles/angular-habits-for-senior-developers').then(
        (m) => m.AngularHabitsForSeniorDevelopers,
      ),
  },
];
