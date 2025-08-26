import { FlashcardData } from '../models/flashcard-data';
import { FLASHCARDS_ANGULAR } from './flashcards/angular';
import { FLASHCARDS_JAVASCRIPT } from './flashcards/javascript';
import { FLASHCARDS_MARKUP } from './flashcards/markup';
import { FLASHCARDS_PROGRAMMING } from './flashcards/programming';
import { FLASHCARDS_TYPESCRIPT } from './flashcards/typescript';

export const FLASHCARDS_CARDS: FlashcardData[] = [
  ...FLASHCARDS_MARKUP,
  ...FLASHCARDS_JAVASCRIPT,
  ...FLASHCARDS_TYPESCRIPT,
  ...FLASHCARDS_ANGULAR,
  ...FLASHCARDS_PROGRAMMING
];
