import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';
import { of } from 'rxjs';

import { App } from './app.component';

const frenchUi = {
  meta: { description: 'desc' },
  language: { label: 'Langue' },
  titles: { dashboard: 'Tableau de bord' },
  nav: {
    skip: 'Aller au contenu',
    tagline: 'QCM Java',
    questionsPass: '{{count}} questions',
    primary: 'Navigation',
    dashboard: 'Tableau de bord',
    dashboardShort: 'Accueil',
    practice: 'Entraînement',
    practiceShort: 'Entraînement',
    exam: 'Examen',
    examShort: 'Examen',
    review: 'Révision',
    reviewShort: 'Révision',
    bank: 'Banque',
    bankShort: 'Banque',
    hide: 'Masquer',
    show: 'Afficher',
    resume: 'Reprendre {{time}}',
  },
  theme: { light: 'Mode clair', dark: 'Mode sombre' },
  errors: { load: 'Erreur de chargement', persist: 'Erreur', tryAgain: 'Réessayer' },
};

describe('App', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTransloco({
          config: {
            availableLangs: ['fr', 'en'],
            defaultLang: 'fr',
            fallbackLang: 'en',
            reRenderOnLangChange: true,
          },
          loader: class {
            getTranslation() {
              return of(frenchUi);
            }
          },
        }),
      ],
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
    localStorage.clear();
  });

  it('renders the Java QCM shell', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    http.expectOne('assets/i18n/questions/fr.json').flush([
      {
        id: 'q001',
        category: 'Types and OOP',
        cert: ['Java'],
        difficulty: 'easy',
        type: 'truefalse',
        question: 'int est un type primitif.',
        options: [
          { id: 'a', text: 'Vrai' },
          { id: 'b', text: 'Faux' },
        ],
        correctOptionIds: ['a'],
        explanation: 'int fait partie des huit types primitifs.',
        reference: 'Java Language Specification — Primitive Types and Values',
      },
    ]);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Java QCM');
  });
});
