import type { Question } from './models/question.model';
import { selectRecentQuestionIds, selectRecentQuestions } from './recent-questions';

function q(id: string): Question {
  return {
    id,
    category: 'JVM',
    cert: ['Java'],
    difficulty: 'easy',
    type: 'single',
    question: id,
    options: [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
    ],
    correctOptionIds: ['a'],
    explanation: 'x',
    reference: 'y',
  };
}

describe('selectRecentQuestions', () => {
  it('returns preferred ids when they exist in the bank', () => {
    const bank = [q('q1'), q('q2'), q('q3'), q('q4')];
    expect(selectRecentQuestions(bank, ['q3', 'q4']).map((item) => item.id)).toEqual(['q3', 'q4']);
  });

  it('falls back to the highest numeric ids when preferred ids are missing', () => {
    const bank = [q('q1'), q('q2'), q('q3'), q('q4'), q('q5')];
    expect(selectRecentQuestionIds(bank, ['q90', 'q91', 'q92'])).toEqual(['q3', 'q4', 'q5']);
  });

  it('returns an empty list for an empty bank', () => {
    expect(selectRecentQuestions([], ['q1'])).toEqual([]);
  });
});
