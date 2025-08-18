import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { FlashcardData } from '../interfaces/flashcard-data';

@Component({
  selector: 'app-flashcard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card">
      <div class="badge">
        {{ flashcard().category }}
      </div>
      <h2 class="question">
        {{ flashcard().question }}
      </h2>

      @if(revealed()) {
      <div class="answer">
        <pre>{{ flashcard().answer }}</pre>
      </div>
      } @else {
      <button class="btn primary" (click)="revealed.set(true)">Reveal</button>
      }
    </article>
  `,
  styles: [``],
})
export class Flashcard {
  readonly flashcard = input.required<FlashcardData>();

  readonly revealed = signal<boolean>(false);
}
