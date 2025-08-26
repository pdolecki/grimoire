import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FlashcardsStore } from './data-access/flashcards-store';
import { SectionHeader } from '../shared/ui/section-header';
import { Toolbar } from './ui/toolbar';
import { Button } from '../shared/ui/button';
import { Flashcard } from './ui/flashcard';
import { CATEGORIES_CARDS } from './constants/categories-cards';
import { Card } from '../shared/ui/card';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card, Toolbar, Button, Flashcard],
  template: `
    <div class="flashcards">
      @if(!flashcardsStore.learningStarted()) {
      <section class="flashcards__category-selection">
        <app-section-header
          title="Categories"
          description="Choose the flashcard categories you’re interested in studying or continue the last session."
        />
        <app-toolbar
          [selectedCount]="flashcardsStore.selectedCategories().size"
          (startLearning)="flashcardsStore.startLearning()"
          (selectAll)="flashcardsStore.selectAllCategories()"
          (clear)="flashcardsStore.clearSelectedCategories()"
        />
        <div class="grid">
          @for (categoryCard of CATEGORIES_CARDS; track categoryCard.title) {
          <app-card
            [cardData]="categoryCard"
            [selected]="flashcardsStore.isCategorySelected(categoryCard.title)"
            (toggled)="
              flashcardsStore.toggleCategorySelection(categoryCard.title)
            "
          />
          }
        </div>
      </section>
      } @else {
      <section class="flashcards__study">
        <app-button
          label="Draw another"
          (click)="flashcardsStore.drawAnother()"
        ></app-button>

        <app-flashcard
          [flashcard]="flashcardsStore.currentFlashcard()"
        ></app-flashcard>
      </section>
      }
    </div>
  `,
  styles: [
    `
      .flashcards {
        &__category-selection {
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
        &__study {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--sz-30);
        }
      }
      @media (max-width: 768px) {
        .flashcards {
          padding: var(--sz-120) var(--sz-4);
          &__category-selection {
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
  readonly CATEGORIES_CARDS = CATEGORIES_CARDS;

  protected readonly flashcardsStore = inject(FlashcardsStore);
}
