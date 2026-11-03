import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageService } from '../core/i18n/language.service';
import { QuestionService } from '../core/services/question.service';
import { NAV_ITEMS } from './nav-items';
import { ShellService } from './shell.service';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  protected readonly items = NAV_ITEMS;
  protected readonly questions = inject(QuestionService);
  protected readonly shell = inject(ShellService);
  protected readonly language = inject(LanguageService);

  protected navLabel(path: string, short = false): string {
    const keys: Record<string, readonly [string, string]> = {
      '/dashboard': ['nav.dashboard', 'nav.dashboardShort'],
      '/practice': ['nav.practice', 'nav.practiceShort'],
      '/exam': ['nav.exam', 'nav.examShort'],
      '/review': ['nav.review', 'nav.reviewShort'],
      '/browser': ['nav.bank', 'nav.bankShort'],
      '/recent': ['nav.recent', 'nav.recentShort'],
    };
    const pair = keys[path] ?? ['nav.bank', 'nav.bankShort'];
    return this.language.text(short ? pair[1] : pair[0]);
  }
}
