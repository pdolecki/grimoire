import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { FlashcardData } from '../interfaces/flashcard-data';
import { Badge } from '../../shared/ui/badge';

@Component({
  selector: 'app-flashcard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Badge],
  template: `
    <article class="flashcard">
      <app-badge [label]="flashcard().category"></app-badge>

      <h2 class="flashcard__question">
        {{ flashcard().question }}
      </h2>

      <pre class="flashcard__answer">{{ flashcard().answer }}</pre>
    </article>
  `,
  styles: [
    `
      .flashcard {
        background: var(--cl-dark-02);
        border: 1px solid var(--cl-primary);
        padding: var(--sz-20);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02);
        &__question {
          color: var(--cl-primary);
        }
        &__answer {
          white-space: pre-wrap;
          margin: 0;
        }
      }
    `,
  ],
})
export class Flashcard {
  readonly flashcard = input.required<FlashcardData>();
}
