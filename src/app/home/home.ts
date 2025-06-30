import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button } from '../shared/ui/button';
import { Card } from '../shared/ui/card';
import { FLASH_CARDS } from '../shared/constants/flash-cards';
import { FlashCard } from '../shared/interfaces/flash-card';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button, Card],
  template: `
    <div class="home">
      <app-button [label]="'Draw'" (clicked)="draw()"></app-button>
      <app-card
        [question]="currentFlashCard().question"
        [answer]="currentFlashCard().answer"
      ></app-card>
    </div>
  `,
  styles: `
    .home {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem;
    }
  `,
})
export default class Home {
  private readonly FLASH_CARDS = FLASH_CARDS;
  protected readonly currentFlashCard = signal<FlashCard>(
    this.getRandomFlashCard()
  );

  protected draw() {
    this.currentFlashCard.set(this.getRandomFlashCard());
  }

  private getRandomFlashCard(): FlashCard {
    const randomIndex = Math.floor(Math.random() * this.FLASH_CARDS.length);
    return this.FLASH_CARDS[randomIndex];
  }
}
