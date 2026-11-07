import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { optionLetter } from '../core/scoring/scoring';
import type { AnswerOption } from '../core/models/question.model';

export type OptionState = 'idle' | 'correct' | 'incorrect' | 'missed';

@Component({
  selector: 'app-answer-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      [class]="stateClass()"
      [attr.aria-checked]="checked()"
      [attr.aria-disabled]="disabled()"
      [attr.role]="multiple() ? 'checkbox' : 'radio'"
      (click)="onClick()"
    >
      <span
        class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border border-current text-[13px] font-medium"
        [class.rounded-full]="!multiple()"
        [class.rounded-md]="multiple()"
      >
        @if (multiple() && checked()) {
          <svg viewBox="0 0 24 24" class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12.5l4.2 4.2L19 7" />
          </svg>
          <span class="sr-only">{{ letter() }}</span>
        } @else {
          {{ letter() }}
        }
      </span>
      <span class="min-w-0 flex-1 leading-snug">{{ option().text }}</span>
    </button>
  `,
})
export class AnswerOptionComponent {
  readonly option = input.required<AnswerOption>();
  readonly index = input.required<number>();
  readonly checked = input(false);
  readonly state = input<OptionState>('idle');
  readonly multiple = input(false);
  readonly disabled = input(false);
  readonly picked = output<void>();

  protected letter(): string {
    return optionLetter(this.index());
  }

  protected stateClass(): string {
    const layout =
      'flex w-full items-start gap-3 rounded-[8px] border px-4 py-3 text-left transition-[background-color,border-color,color,transform] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98]';
    const base = this.checked() && this.state() === 'idle' ? 'border-accent bg-surface-2' : 'border-line bg-surface hover:bg-surface-2';
    switch (this.state()) {
      case 'correct':
      case 'missed':
        return `${layout} border-good bg-good-bg text-good`;
      case 'incorrect':
        return `${layout} border-bad bg-bad-bg text-bad`;
      default:
        return `${layout} ${base}`;
    }
  }

  protected onClick(): void {
    if (!this.disabled()) this.picked.emit();
  }
}
