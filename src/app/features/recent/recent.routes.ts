import { Routes } from '@angular/router';

export const RECENT_ROUTES: Routes = [
  {
    path: '',
    data: { title: 'recent' },
    loadComponent: () => import('./recent.component').then((m) => m.RecentComponent),
  },
];
