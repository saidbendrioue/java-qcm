import { Routes } from '@angular/router';

import { examSessionGuard } from '../../core/guards/exam-session.guard';

export const EXAM_ROUTES: Routes = [
  {
    path: '',
    data: { title: 'exam' },
    loadComponent: () => import('./exam-setup.component').then((m) => m.ExamSetupComponent),
  },
  {
    path: 'session',
    canActivate: [examSessionGuard],
    data: { title: 'examSession' },
    loadComponent: () => import('./exam-session.component').then((m) => m.ExamSessionComponent),
  },
  {
    path: 'results/:id',
    data: { title: 'examResults' },
    loadComponent: () => import('./exam-results.component').then((m) => m.ExamResultsComponent),
  },
];
