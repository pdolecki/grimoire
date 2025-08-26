import { computed, Injectable, signal } from '@angular/core';
import { FLASHCARDS_CARDS } from '../constants/flashcards-cards';
import { CATEGORIES_CARDS } from '../constants/categories-cards';
import { FlashcardData } from '../models/flashcard-data';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsStore {
  readonly selectedCategories = signal<Set<string>>(new Set());
  readonly learningStarted = signal<boolean>(false);
  readonly currentFlashcard = signal<FlashcardData>(FLASHCARDS_CARDS[0]);

  readonly selectedFlashcards = computed(() =>
    FLASHCARDS_CARDS.filter((flashcard) =>
      this.selectedCategories().has(flashcard.category)
    )
  );

  readonly isCategorySelected = (id: string) =>
    this.selectedCategories().has(id);

  toggleCategorySelection(id: string) {
    this.selectedCategories.update((set) => {
      const next = new Set(set);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  selectAllCategories() {
    this.selectedCategories.set(new Set(CATEGORIES_CARDS.map((c) => c.title)));
  }

  clearSelectedCategories() {
    this.selectedCategories.set(new Set());
  }

  drawAnother() {
    this.currentFlashcard.set(this.pickRandom());
  }

  startLearning() {
    this.drawAnother();
    this.learningStarted.set(true);
  }

  private pickRandom(): FlashcardData {
    const pool = this.selectedFlashcards();
    if (pool.length === 0) return FLASHCARDS_CARDS[0];
    const idx = Math.floor(Math.random() * pool.length);
    return pool[idx] ?? null;
  }
}
