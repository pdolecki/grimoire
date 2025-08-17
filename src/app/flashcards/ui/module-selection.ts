import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeader } from '../../shared/ui/section-header';
import { Toolbar } from './toolbar';
import { FlashcardsStore } from '../data-access/flashcards-store';
import { Card } from '../../shared/ui/card';

@Component({
  selector: 'app-module-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Toolbar, Card],
  template: `
    <section class="module-selection">
      <app-section-header
        title="Modules"
        subtitle="Choose the flashcard modules you’re interested in studying or continue the last session."
      />

      <app-toolbar
        [selectedCount]="flashcardsStore.selectedCategories().size"
        (startLearning)="flashcardsStore.learningStarted.set(true)"
        (selectAll)="flashcardsStore.selectAllCategories()"
        (clear)="flashcardsStore.clearSelectedCategories()"
      />

      <div class="flashcards-grid">
        @for (category of flashcardsStore.CATEGORIES; track category.title) {
        <app-card
          [cardData]="category"
          [selected]="flashcardsStore.isCategorySelected(category.title)"
          (toggled)="flashcardsStore.toggleCategorySelection(category.title)"
        />
        }
      </div>
    </section>
  `,
  styles: [
    `
      .module-selection {
        display: flex;
        flex-direction: column;
        gap: var(--sz-30);
      }
      .flashcards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--sz-50);
        align-items: stretch;
      }
      .flashcards-grid > app-card {
        display: block;
        height: 100%;
      }

      @media (max-width: 768px) {
        .flashcards-grid {
          grid-template-columns: 1fr;
          gap: var(--sz-30);
        }
      }
    `,
  ],
})
export class ModuleSelection {
  readonly flashcardsStore = inject(FlashcardsStore);
}
