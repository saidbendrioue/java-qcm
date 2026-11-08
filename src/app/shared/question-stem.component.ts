import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { splitQuestionStem } from '../core/format';

@Component({
  selector: 'app-question-stem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="rootClass()">
      <h2 [class]="titleClass()">{{ stem().title }}</h2>
      @if (stem().code; as code) {
        <pre class="question-code mt-4 overflow-x-auto whitespace-pre-wrap rounded-[8px] border border-line bg-surface-2 p-4 font-mono text-[14px] font-normal leading-relaxed tracking-normal text-ink">{{ code }}</pre>
      }
    </div>
  `,
})
export class QuestionStemComponent {
  readonly text = input.required<string>();
  readonly titleClassName = input('text-[22px] font-medium leading-snug tracking-[-0.02em] md:text-[24px]');
  protected readonly stem = computed(() => splitQuestionStem(this.text()));
  protected rootClass = computed(() => (this.stem().code ? 'question-stem has-code' : 'question-stem'));
  protected titleClass = computed(() => {
    const base = this.titleClassName();
    return this.stem().code ? base : `${base} whitespace-pre-wrap`;
  });
}
