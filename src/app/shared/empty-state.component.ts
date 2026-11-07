import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-[1rem] border border-dashed border-line bg-surface px-6 py-12 text-center">
      <h2 class="text-2xl tracking-tight">{{ title() }}</h2>
      <p class="mx-auto mt-2 max-w-md text-muted leading-relaxed">{{ message() }}</p>
      <div class="mt-5">
        <ng-content />
      </div>
    </div>
  `,
})
export class EmptyStateComponent {
  readonly title = input.required<string>();
  readonly message = input.required<string>();
}
