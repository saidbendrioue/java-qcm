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
    const key =
      path === '/dashboard'
        ? short
          ? 'nav.dashboardShort'
          : 'nav.dashboard'
        : path === '/practice'
          ? short
            ? 'nav.practiceShort'
            : 'nav.practice'
          : path === '/exam'
            ? short
              ? 'nav.examShort'
              : 'nav.exam'
            : path === '/review'
              ? short
                ? 'nav.reviewShort'
                : 'nav.review'
              : short
                ? 'nav.bankShort'
                : 'nav.bank';
    return this.language.text(key);
  }
}
