import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { elapsedSeconds, formatDuration, formatWhen } from '../../core/format';
import { LanguageService } from '../../core/i18n/language.service';
import { formatPercent, isAnswerCorrect } from '../../core/scoring/scoring';
import { ProgressService } from '../../core/services/progress.service';
import { QuestionService } from '../../core/services/question.service';
import { AnswerReviewComponent, type AnswerReviewRow } from '../../shared/answer-review.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';

@Component({
  selector: 'app-exam-results',
  imports: [RouterLink, EmptyStateComponent, AnswerReviewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exam-results.component.html',
})
export class ExamResultsComponent {
  readonly id = input('');
  private readonly bank = inject(QuestionService);
  protected readonly progress = inject(ProgressService);
  protected readonly language = inject(LanguageService);
  protected readonly reviewing = signal(false);
  protected readonly formatPercent = formatPercent;
  protected readonly formatDuration = formatDuration;
  protected when(iso: string): string {
    return formatWhen(iso, this.language.lang());
  }
  protected readonly exam = computed(() => this.progress.state().exams.find((item) => item.id === this.id()) ?? null);
  protected readonly rows = computed((): AnswerReviewRow[] => {
    const exam = this.exam();
    if (!exam) return [];
    return exam.questionIds.map((questionId, index) => {
      const question = this.bank.byId(questionId);
      const selectedIds = exam.answers[questionId] ?? [];
      return {
        number: index + 1,
        questionId,
        question,
        selectedIds,
        correct: question ? isAnswerCorrect(question, selectedIds) : false,
      };
    });
  });

  protected elapsed(): string {
    const exam = this.exam();
    return exam ? formatDuration(elapsedSeconds(exam.startedAt, exam.finishedAt)) : '0:00';
  }
}
