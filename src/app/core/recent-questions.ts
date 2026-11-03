import type { Question } from './models/question.model';

/** Bump when the question JSON changes so browsers skip a stale cached bank. */
export const QUESTION_BANK_VERSION = '2026-11-03-fullstack-v2';

export const RECENT_QUESTION_IDS: readonly string[] = [
  'q363',
  'q364',
  'q365',
  'q366',
  'q367',
  'q368',
  'q369',
  'q370',
  'q371',
  'q372',
  'q373',
  'q374',
  'q375',
  'q376',
  'q377',
  'q378',
  'q379',
  'q380',
  'q381',
  'q382',
  'q383',
  'q384',
  'q385',
  'q386',
  'q387',
  'q388',
  'q389',
  'q390',
  'q391',
  'q392',
  'q393',
  'q394',
  'q395',
  'q396',
  'q397',
  'q398',
  'q399',
  'q400',
  'q401',
  'q402',
  'q403',
  'q404',
  'q405',
  'q406',
  'q407',
  'q408',
  'q409',
  'q410',
  'q411',
  'q412',
  'q413',
  'q414',
  'q415',
  'q416',
  'q417',
  'q418',
  'q419',
  'q420',
  'q421',
  'q422',
  'q423',
  'q424',
  'q425',
  'q426',
  'q427',
  'q428',
  'q429',
  'q430',
  'q431',
];

function numericId(id: string): number {
  const value = Number(id.replace(/^q/i, ''));
  return Number.isFinite(value) ? value : -1;
}

/**
 * Resolve the recently-added list against the loaded bank.
 * Prefer the curated ids; if a stale cached bank lacks them, fall back to the
 * highest-numbered questions so the Recent page never shows an empty set by mistake.
 */
export function selectRecentQuestions(
  questions: readonly Question[],
  preferredIds: readonly string[] = RECENT_QUESTION_IDS,
): Question[] {
  if (questions.length === 0) return [];
  const byId = new Map(questions.map((question) => [question.id, question]));
  const preferred = preferredIds
    .map((id) => byId.get(id))
    .filter((question): question is Question => question !== undefined);
  if (preferred.length > 0) return preferred;

  const limit = preferredIds.length > 0 ? preferredIds.length : 40;
  return [...questions]
    .sort((left, right) => numericId(left.id) - numericId(right.id))
    .slice(-Math.min(limit, questions.length));
}

export function selectRecentQuestionIds(
  questions: readonly Question[],
  preferredIds: readonly string[] = RECENT_QUESTION_IDS,
): string[] {
  return selectRecentQuestions(questions, preferredIds).map((question) => question.id);
}
