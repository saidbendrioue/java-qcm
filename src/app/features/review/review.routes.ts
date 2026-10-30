import { Routes } from '@angular/router';

export const REVIEW_ROUTES: Routes = [
  {
    path: '',
    data: { title: 'review' },
    loadComponent: () => import('./review.component').then((m) => m.ReviewComponent),
  },
];
