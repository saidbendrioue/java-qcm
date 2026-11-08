import { describe, expect, it } from 'vitest';

import { splitQuestionStem } from './format';

describe('splitQuestionStem', () => {
  it('keeps a single-paragraph stem intact', () => {
    expect(splitQuestionStem('What is Hibernate?')).toEqual({
      title: 'What is Hibernate?',
      code: null,
    });
  });

  it('splits prose from a code block after a blank line', () => {
    const stem = `What is wrong with the following code?

for (String s : maListe) {
    maListe.remove(s);
}`;
    expect(splitQuestionStem(stem)).toEqual({
      title: 'What is wrong with the following code?',
      code: `for (String s : maListe) {
    maListe.remove(s);
}`,
    });
  });
});
