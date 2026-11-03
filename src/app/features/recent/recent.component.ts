import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { RECENT_QUESTION_IDS } from '../../core/recent-questions';
import type { Question } from '../../core/models/question.model';
import { QuestionService } from '../../core/services/question.service';
import { LoadingBlockComponent } from '../../shared/loading-block.component';

@Component({
  selector: 'app-recent',
  imports: [RouterLink, LoadingBlockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './recent.component.html',
})
export class RecentComponent {
  private readonly bank = inject(QuestionService);
  protected readonly language = inject(LanguageService);
  private readonly openAnswers = signal<ReadonlySet<string>>(new Set());
  protected readonly loading = computed(() => this.bank.status() === 'loading');
  protected readonly questions = computed(() =>
    RECENT_QUESTION_IDS.map((id) => this.bank.byId(id)).filter((question): question is Question => question !== undefined),
  );

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
