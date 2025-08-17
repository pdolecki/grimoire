import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Flashcard } from '../interfaces/flashcard';
import { Button } from '../../shared/ui/button';
import { FlashcardsStore } from '../data-access/flashcards-store';

@Component({
  selector: 'app-learn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  template: `
    <section class="learn">
      <app-button label="Draw another" (click)="drawAnother()"></app-button>

      <article class="card">
        <div class="badge">{{ currentFlashcard().category }}</div>
        <h2 class="question">{{ currentFlashcard().question }}</h2>

        <!-- <div
          *ngIf="revealed(); else revealBlock"
          class="answer"
          aria-live="polite"
        >
          <pre>{{ currentFlashcard.answer }}</pre>
        </div>
        <ng-template #revealBlock>
          <button class="btn primary" (click)="reveal()">Reveal</button>
        </ng-template> -->
      </article>
    </section>
  `,
  styles: [``],
})
export class Learn {
  readonly flashcardsStore = inject(FlashcardsStore);

  protected readonly revealed = signal(false);
  readonly currentFlashcard = signal(this.getRandomFlashcard());

  getRandomFlashcard() {
    const randomIndex = Math.floor(
      Math.random() * this.flashcardsStore.selectedFlashcards().length
    );
    return this.flashcardsStore.selectedFlashcards()[randomIndex];
  }

  drawAnother() {
    this.currentFlashcard.set(this.getRandomFlashcard());
  }
}
