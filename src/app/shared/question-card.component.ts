import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import { LanguageService } from '../core/i18n/language.service';
import type { Question } from '../core/models/question.model';
import { isAnswerCorrect } from '../core/scoring/scoring';
import { AnswerOptionComponent, type OptionState } from './answer-option.component';

@Component({
  selector: 'app-question-card',
  imports: [AnswerOptionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-card.component.html',
})
export class QuestionCardComponent {
  protected readonly language = inject(LanguageService);
  readonly question = input.required<Question>();
  readonly selectedIds = input<readonly string[]>([]);
  readonly revealed = input(false);
  readonly positionLabel = input('');
  readonly choose = output<string>();

  protected readonly prompt = computed(() => {
    const question = this.question();
    if (question.type === 'multiple') return this.language.text('card.multiplePrompt');
    if (question.type === 'truefalse') return this.language.text('card.trueFalsePrompt');
    return this.language.text('card.singlePrompt');
  });

  protected checked(optionId: string): boolean {
    return this.selectedIds().includes(optionId);
  }

  protected correctSelection(): boolean {
    return isAnswerCorrect(this.question(), this.selectedIds());
  }

  protected optionState(optionId: string): OptionState {
    if (!this.revealed()) return 'idle';
    const selected = this.checked(optionId);
    const correct = this.question().correctOptionIds.includes(optionId);
    if (selected && correct) return 'correct';
    if (selected && !correct) return 'incorrect';
    if (!selected && correct) return 'missed';
    return 'idle';
  }
}
