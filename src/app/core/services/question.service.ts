import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { LanguageService, type AppLang } from '../i18n/language.service';
import type { Certification } from '../models/question.model';
import { parseQuestions, type Question } from '../models/question.model';
import { QUESTION_BANK_VERSION } from '../recent-questions';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private readonly http = inject(HttpClient);
  private readonly language = inject(LanguageService);
  private readonly questionsState = signal<Question[]>([]);
  private readonly statusState = signal<'loading' | 'ready' | 'error'>('loading');
  private readonly errorState = signal<string | null>(null);
  private pending: Promise<void> | null = null;
  private loadedLang: AppLang | null = null;

  constructor() {
    effect(() => {
      const lang = this.language.lang();
      untracked(() => void this.load(lang));
    });
  }

  readonly questions = this.questionsState.asReadonly();
  readonly status = this.statusState.asReadonly();
  readonly error = this.errorState.asReadonly();
  readonly categories = computed(() => [...new Set(this.questions().map((question) => question.category))].sort());
  readonly certifications = computed(() => {
    const found = new Set<Certification>();
    for (const question of this.questions()) {
      for (const cert of question.cert) found.add(cert);
    }
    return [...found];
  });

  load(lang = this.language.lang()): Promise<void> {
    if (this.statusState() === 'ready' && this.loadedLang === lang) return Promise.resolve();
    if (this.pending && this.loadedLang === lang) return this.pending;
    this.loadedLang = lang;
    this.statusState.set('loading');
    this.errorState.set(null);
    this.pending = this.fetchBank(lang)
      .then((payload) => {
        if (this.loadedLang !== lang) return;
        const questions = parseQuestions(payload);
        if (!questions || questions.length === 0) throw new Error('invalid question bank');
        this.questionsState.set(questions);
        this.statusState.set('ready');
      })
      .catch(() => {
        if (this.loadedLang !== lang) return;
        this.errorState.set('errors.load');
        this.statusState.set('error');
        this.pending = null;
      });
    return this.pending;
  }

  private fetchBank(lang: AppLang): Promise<unknown> {
    const request = (code: AppLang) =>
      firstValueFrom(
        this.http.get<unknown>(`assets/i18n/questions/${code}.json`, {
          params: { v: QUESTION_BANK_VERSION },
        }),
      );
    if (lang === 'en') return request('en');
    return request(lang).catch(() => request('en'));
  }

  byId(id: string): Question | undefined {
    return this.questions().find((question) => question.id === id);
  }
}
