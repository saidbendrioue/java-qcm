import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/i18n/language.service';
import { RECENT_QUESTION_IDS } from '../../core/recent-questions';
import type { Question } from '../../core/models/question.model';
import { formatWhen } from '../../core/format';
import { formatPercent } from '../../core/scoring/scoring';
import { ExamStore } from '../../core/stores/exam.store';
import { ProgressService } from '../../core/services/progress.service';
import { QuestionService } from '../../core/services/question.service';
import { ThemeService } from '../../core/services/theme.service';
import { ToastService } from '../../core/services/toast.service';
import { summarize } from '../../core/stats/progress-stats';
import { CategoryChartComponent } from '../../shared/category-chart.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { LoadingBlockComponent } from '../../shared/loading-block.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CategoryChartComponent, EmptyStateComponent, LoadingBlockComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  private readonly bank = inject(QuestionService);
  private readonly toast = inject(ToastService);
  protected readonly language = inject(LanguageService);
  private readonly examStore = inject(ExamStore);
  protected readonly progress = inject(ProgressService);
  protected readonly theme = inject(ThemeService);
  protected readonly formatPercent = formatPercent;
  protected when(iso: string): string {
    return formatWhen(iso, this.language.lang());
  }
  protected readonly loading = computed(() => this.bank.status() === 'loading');
  protected readonly summary = computed(() => summarize(this.bank.questions(), this.progress.state()));
  protected readonly chartLabels = computed(() =>
    this.summary().categories.map((item) => this.language.categoryLabel(item.category)),
  );
  protected readonly chartValues = computed(() => this.summary().categories.map((item) => item.percent));
  protected readonly recentQuestions = computed(() =>
    RECENT_QUESTION_IDS.map((id) => this.bank.byId(id)).filter((question): question is Question => question !== undefined),
  );

  protected exportFile(): void {
    const blob = new Blob([this.progress.exportJson()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `java-qcm-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    this.toast.show(this.language.text('toast.exported'), 'success');
  }

  protected importFile(event: Event): void {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || !input.files?.[0]) return;
    const file = input.files[0];
    void file.text().then((text) => {
      const ok = this.progress.importJson(text);
      this.examStore.resync();
      this.theme.apply(this.progress.theme());
      this.toast.show(
        ok ? this.language.text('toast.imported') : this.language.text('toast.importInvalid'),
        ok ? 'success' : 'error',
      );
      input.value = '';
    });
  }
}
