import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { selectRecentQuestions } from '../../core/recent-questions';
import type { Question } from '../../core/models/question.model';
import { QuestionService } from '../../core/services/question.service';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { LoadingBlockComponent } from '../../shared/loading-block.component';

@Component({
  selector: 'app-recent',
  imports: [RouterLink, EmptyStateComponent, LoadingBlockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recent.component.html',
})
export class RecentComponent {
  private readonly bank = inject(QuestionService);
  protected readonly language = inject(LanguageService);
  private readonly openAnswers = signal<ReadonlySet<string>>(new Set());
  protected readonly loading = computed(() => this.bank.status() === 'loading');
  protected readonly loadError = computed(() => this.bank.status() === 'error');
  protected readonly questions = computed(() => selectRecentQuestions(this.bank.questions()));

  protected reloadBank(): void {
    void this.bank.load();
  }

  protected answerOpen(id: string): boolean {
    return this.openAnswers().has(id);
  }

  protected toggleAnswer(id: string): void {
    this.openAnswers.update((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  protected isCorrect(question: Question, optionId: string): boolean {
    return question.correctOptionIds.includes(optionId);
  }
}
