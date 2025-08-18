import { computed, Injectable, signal } from '@angular/core';
import { FLASHCARDS } from '../constants/flashcards';
import { CATEGORIES } from '../constants/categories';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsStore {
  readonly FLASHCARDS = FLASHCARDS;
  readonly CATEGORIES = CATEGORIES;

  readonly selectedCategories = signal<Set<string>>(new Set());
  readonly selectedFlashcards = computed(() =>
    this.FLASHCARDS.filter((fc) => this.selectedCategories().has(fc.category))
  );

  readonly learningStarted = signal<boolean>(false);
  readonly currentFlashcard = signal(this.getRandomFlashcard());

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
    this.selectedCategories.set(new Set(this.CATEGORIES.map((c) => c.title)));
  }

  clearSelectedCategories() {
    this.selectedCategories.set(new Set());
  }

  getRandomFlashcard() {
    const randomIndex = Math.floor(
      Math.random() * this.selectedFlashcards().length
    );
    console.log(this.selectedFlashcards()[randomIndex]);
    return this.selectedFlashcards()[randomIndex];
  }

  drawAnother() {
    this.currentFlashcard.set(this.getRandomFlashcard());
  }

  startLearning() {
    this.drawAnother();
    this.learningStarted.set(true);
  }
}
