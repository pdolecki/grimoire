import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FlashcardsStore } from './data-access/flashcards-store';
import { SectionHeader } from '../shared/ui/section-header';
import { Toolbar } from './ui/toolbar';
import { Card } from '../shared/ui/card';
import { Button } from '../shared/ui/button';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card, Toolbar, Button],
  template: `
    <section class="flashcards">
      @if(!flashcardsStore.learningStarted()) {
      <section class="flashcards__module-selection">
        <app-section-header
          title="Modules"
          description="Choose the flashcard modules you’re interested in studying or continue the last session."
        />
        <app-toolbar
          [selectedCount]="flashcardsStore.selectedCategories().size"
          (startLearning)="flashcardsStore.startLearning()"
          (selectAll)="flashcardsStore.selectAllCategories()"
          (clear)="flashcardsStore.clearSelectedCategories()"
        />
        <div class="grid">
          @for (category of flashcardsStore.CATEGORIES; track category.title) {
          <app-card
            [cardData]="category"
            [selected]="flashcardsStore.isCategorySelected(category.title)"
            (toggled)="flashcardsStore.toggleCategorySelection(category.title)"
          />
          }
        </div>
      </section>
      } @else {
      <app-button
        label="Draw another"
        (click)="flashcardsStore.drawAnother()"
      ></app-button>

      <article class="card">
        <div class="badge">
          {{ flashcardsStore.currentFlashcard().category }}
        </div>
        <h2 class="question">
          {{ flashcardsStore.currentFlashcard().question }}
        </h2>

        @if(flashcardsStore.revealed()) {
        <div class="answer">
          <pre>{{ flashcardsStore.currentFlashcard().answer }}</pre>
        </div>
        } @else {
        <button
          class="btn primary"
          (click)="flashcardsStore.revealed.set(true)"
        >
          Reveal
        </button>
        }
      </article>
      }
    </section>
  `,
  styles: [
    `
      .flashcards {
        margin: var(--nav-heigh) auto;
        padding: var(--sz-120) var(--sz-30);
        &__module-selection {
          display: flex;
          flex-direction: column;
          gap: var(--sz-30);
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--sz-50);
            align-items: stretch;
            & > app-card {
              display: block;
              height: 100%;
            }
          }
        }
        @media (max-width: 768px) {
          &__module-selection {
            display: flex;
            flex-direction: column;
            gap: var(--sz-30);
            .grid {
              grid-template-columns: 1fr;
              gap: var(--sz-30);
            }
          }
        }
      }
    `,
  ],
})
export default class Flashcards {
  protected readonly flashcardsStore = inject(FlashcardsStore);
}
