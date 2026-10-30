import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

import { APP_NAME } from '../core/constants';
import { LanguageService, type AppLang } from '../core/i18n/language.service';
import { formatDuration } from '../core/format';
import { ProgressService } from '../core/services/progress.service';
import { ThemeService } from '../core/services/theme.service';
import { TimerService } from '../core/services/timer.service';
import { ShellService } from './shell.service';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly timer = inject(TimerService);
  protected readonly theme = inject(ThemeService);
  protected readonly language = inject(LanguageService);
  protected readonly progress = inject(ProgressService);
  protected readonly shell = inject(ShellService);
  private readonly navigation = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.currentTitle()),
    ),
    { initialValue: this.currentTitle() },
  );

  protected readonly pageTitle = computed(() => {
    this.language.lang();
    this.navigation();
    return this.currentTitle();
  });
  protected readonly timeLeft = computed(() => {
    const exam = this.progress.activeExam();
    if (!exam) return null;
    if (this.timer.isRunning()) return formatDuration(this.timer.remainingSeconds());
    const remaining = Math.max(0, Math.ceil((Date.parse(exam.deadlineAt) - Date.now()) / 1000));
    return formatDuration(remaining);
  });

  constructor() {
    effect(() => this.title.setTitle(`${this.pageTitle()} · ${APP_NAME}`));
  }

  protected onLanguage(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'fr' || value === 'en') this.language.use(value as AppLang);
  }

  private currentTitle(): string {
    let current = this.router.routerState.root;
    let label = APP_NAME;
    while (current.firstChild) {
      current = current.firstChild;
      const value = current.snapshot.data['title'];
      if (typeof value === 'string') label = this.language.text(`titles.${value}`);
    }
    return label;
  }
}
