import { Injectable } from '@angular/core';
import type { Translation, TranslocoLoader } from '@jsverse/transloco';
import { of } from 'rxjs';

import en from '../../../../public/assets/i18n/en.json';
import fr from '../../../../public/assets/i18n/fr.json';

const catalogs: Record<string, Translation> = {
  fr: fr as Translation,
  en: en as Translation,
};

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    return of(catalogs[lang] ?? catalogs['fr']);
  }
}
