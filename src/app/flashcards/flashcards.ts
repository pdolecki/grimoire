import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FlashcardsStore } from './data-access/flashcards-store';
import { Learn } from './ui/learn';
import { ModuleSelection } from './ui/module-selection';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModuleSelection, Learn],
  template: `
    <section class="flashcards">
      @if(!flashcardsStore.learningStarted()) {
      <app-module-selection></app-module-selection>
      } @else {
      <app-learn
      ></app-learn>
      }
    </section>
  `,
  styles: [
    `
      .flashcards {
        margin: var(--nav-heigh) auto;
        padding: var(--sz-120) var(--sz-30);
      }
    `,
  ],
})
export default class Flashcards {
  protected readonly flashcardsStore = inject(FlashcardsStore);
}
