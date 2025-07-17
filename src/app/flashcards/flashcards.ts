import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { FLASH_CARDS } from './constants/flash-cards';
import { FlashCard } from './interfaces/flash-card';

@Component({
  selector: 'app-flashcards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flashcards">
      <button (click)="currentFlashCard.set(getRandomFlashCard())">Draw</button>

      <div class="flashcard">
        <h2>🔮 {{ currentFlashCard().question }}</h2>
        @if (showAnswer()) {
        <p>{{ currentFlashCard().answer }}</p>
        } @else {
        <button (click)="showAnswer.set(true)">Show Answer</button>
        }
      </div>
    </div>
  `,
  styles: `
    .flashcards {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      .flashcard {
        width: 30%;
        min-width: 325px;
        border: 2px solid #8eefff;
        border-radius: 15px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h2 {
          color: #8eefff;
          letter-spacing: 2px;
        }
        p {
          white-space: pre-line;
          font-style: italic;
        }
      }
      button {
        padding: .5rem 1rem;
        border: 2px solid #fff;
        border-radius: 15px;
        background-color: transparent;
        color: #fff;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
  `,
})
export default class FlashCards {
  protected showAnswer = signal<boolean>(false);
  protected readonly currentFlashCard = signal<FlashCard>(
    this.getRandomFlashCard()
  );

  constructor() {
    effect(() => {
      this.currentFlashCard();
      this.showAnswer.set(false);
    });
  }

  protected getRandomFlashCard(): FlashCard {
    const randomIndex = Math.floor(Math.random() * FLASH_CARDS.length);
    return FLASH_CARDS[randomIndex];
  }
}
