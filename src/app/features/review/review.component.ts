import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import type { Question } from '../../core/models/question.model';
import { ProgressService } from '../../core/services/progress.service';
import { QuestionService } from '../../core/services/question.service';
import { dueIds, mistakeIds } from '../../core/stats/progress-stats';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { LoadingBlockComponent } from '../../shared/loading-block.component';
import { QuestionStemComponent } from '../../shared/question-stem.component';

type ReviewTab = 'mistakes' | 'bookmarks' | 'due';

@Component({
  selector: 'app-review',
  imports: [RouterLink, EmptyStateComponent, LoadingBlockComponent, QuestionStemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bank = inject(QuestionService);
  protected readonly language = inject(LanguageService);
  protected readonly progress = inject(ProgressService);
  protected readonly tabs: readonly ReviewTab[] = ['mistakes', 'bookmarks', 'due'];
  protected readonly tab = signal<ReviewTab>('mistakes');
  protected readonly loading = computed(() => this.bank.status() === 'loading');
  protected readonly questions = computed(() =>
    this.ids()
      .map((id) => this.bank.byId(id))
      .filter((question): question is Question => question !== undefined),
  );

  constructor() {
    const requested = this.route.snapshot.queryParamMap.get('tab');
    if (requested === 'bookmarks' || requested === 'due' || requested === 'mistakes') this.tab.set(requested);
  }

  protected select(tab: ReviewTab): void {
    this.tab.set(tab);
  }

  protected label(tab: ReviewTab): string {
    if (tab === 'bookmarks') return this.language.text('review.bookmarks');
    if (tab === 'due') return this.language.text('review.due');
    return this.language.text('review.mistakes');
  }

  private ids(): readonly string[] {
    const state = this.progress.state();
    if (this.tab() === 'bookmarks') return state.bookmarks;
    if (this.tab() === 'due') return dueIds(state.cards);
    return mistakeIds(state);
  }
}
