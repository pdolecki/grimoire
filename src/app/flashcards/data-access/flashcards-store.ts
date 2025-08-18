import { computed, Injectable, signal } from '@angular/core';
import { FLASHCARDS } from '../constants/flashcards';
import { CATEGORIES } from '../constants/categories';
import { FlashcardData } from '../interfaces/flashcard-data';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsStore {
  readonly selectedCategories = signal<Set<string>>(new Set());
  readonly learningStarted = signal<boolean>(false);
  readonly currentFlashcard = signal<FlashcardData>(FLASHCARDS[0]);

  readonly selectedFlashcards = computed(() =>
    FLASHCARDS.filter((fc) => this.selectedCategories().has(fc.category))
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
    this.selectedCategories.set(new Set(CATEGORIES.map((c) => c.title)));
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
    if (pool.length === 0) return FLASHCARDS[0];
    const idx = Math.floor(Math.random() * pool.length);
    return pool[idx] ?? null;
  }
}
