import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SectionHeader } from '../shared/ui/section-header';
import { Card } from './ui/card';
import { Toolbar } from './ui/toolbar';
import { FlashcardsStore } from './data-access/flashcards-store';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card, Toolbar],
  template: `
    <section class="flashcards">
      <app-section-header
        title="Modules"
        subtitle="Choose the flashcard modules you’re interested in studying or continue the last session."
      />

      <app-toolbar
        [selectedCount]="flashcardsStore.selectedCategories().size"
        (startLearning)="startLearning()"
        (selectAll)="flashcardsStore.selectAllCategories()"
        (clear)="flashcardsStore.clearSelectedCategories()"
      />

      <div class="flashcards-grid">
        @for (category of flashcardsStore.CATEGORIES; track category.category) {
        <app-card
          [cardData]="category"
          [selected]="flashcardsStore.isCategorySelected(category.category)"
          (toggled)="flashcardsStore.toggleCategorySelection(category.category)"
        />
        }
      </div>
    </section>
  `,
  styles: [
    `
      .flashcards {
        margin: var(--nav-heigh) auto;
        max-width: 1400px;
        padding: var(--sz-120) var(--sz-30);
        position: relative;
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
export default class Flashcards {
  private readonly router = inject(Router);
  readonly flashcardsStore = inject(FlashcardsStore);

  protected startLearning() {}
}
