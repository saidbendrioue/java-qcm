import { Injectable, inject, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

import { LANG_KEY } from '../constants';
import { StorageService } from '../services/storage.service';

export type AppLang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly transloco = inject(TranslocoService);
  private readonly storage = inject(StorageService);
  readonly lang = signal<AppLang>('fr');
  private readonly catalogReady = signal(0);

  init(): void {
    this.use(this.stored());
  }

  use(lang: AppLang): void {
    this.lang.set(lang);
    this.storage.set(LANG_KEY, lang);
    document.documentElement.lang = lang;
    this.transloco.setActiveLang(lang);
    this.transloco.load(lang).subscribe(() => {
      if (this.lang() !== lang) return;
      this.catalogReady.update((value) => value + 1);
      this.applyMeta(lang);
    });
  }

  text(key: string, params?: Record<string, string | number | null | undefined>): string {
    this.touch();
    const safe = params
      ? Object.fromEntries(Object.entries(params).map(([name, value]) => [name, value ?? '']))
      : undefined;
    return this.transloco.translate(key, safe);
  }

  categoryLabel(category: string): string {
    this.touch();
    const labels = this.transloco.translateObject<Record<string, string>>('categories');
    return labels?.[category] ?? category;
  }

  difficultyLabel(difficulty: string): string {
    this.touch();
    return this.lookup(`difficulty.${difficulty}`, difficulty);
  }

  typeLabel(type: string): string {
    this.touch();
    return this.lookup(`type.${type}`, type);
  }

  statusLabel(status: string): string {
    this.touch();
    return this.lookup(`status.${status}`, status);
  }

  private touch(): void {
    this.lang();
    this.catalogReady();
  }

  private stored(): AppLang {
    const value = this.storage.get(LANG_KEY);
    return value === 'en' || value === 'fr' ? value : 'fr';
  }

  private lookup(key: string, fallback: string): string {
    const translated = this.transloco.translate(key);
    return translated === key ? fallback : translated;
  }

  private applyMeta(lang: AppLang): void {
    if (this.transloco.getActiveLang() !== lang) return;
    const description = this.transloco.translate('meta.description');
    if (description === 'meta.description') return;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }
}
