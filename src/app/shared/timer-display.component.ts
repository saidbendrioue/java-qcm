import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { formatDuration } from '../core/format';

@Component({
  selector: 'app-timer-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p
      class="font-mono text-[32px] font-medium tracking-[-0.02em] tabular-nums"
      role="timer"
      [class.text-bad]="urgent()"
      [class.text-accent]="!urgent()"
      [attr.aria-label]="'Time remaining ' + label()"
    >
      {{ label() }}
    </p>
  `,
})
export class TimerDisplayComponent {
  readonly seconds = input.required<number>();
  protected readonly label = computed(() => formatDuration(this.seconds()));
  protected readonly urgent = computed(() => this.seconds() <= 300);
}
