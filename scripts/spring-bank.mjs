import { springBootQuestions } from './spring-boot-questions.mjs';
import { springFundamentalsQuestions } from './spring-fundamentals-questions.mjs';
import { springPlatformQuestions } from './spring-platform-questions.mjs';

export const springQuestions = [
  ...springFundamentalsQuestions,
  ...springPlatformQuestions,
  ...springBootQuestions,
];
