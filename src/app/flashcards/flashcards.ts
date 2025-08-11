import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../shared/ui/section-header';
import { CATEGORIES } from '../shared/constants/categories';
import { Card } from '../shared/ui/card';

@Component({
  selector: 'app-flashcards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card],
  host: { class: 'block' },
  template: `
    <section
      class="flashcards"
      id="expect"
      aria-labelledby="flashcards-heading"
    >
      <app-section-header
        id="flashcards-heading"
        title="MODULES"
        subtitle="Choose the flashcard modules you’re interested in studying or continue the last session."
      ></app-section-header>

      <div class="flashcards-grid" role="list">
        @for (category of categories; track category.id) {
        <app-card [cardData]="category"></app-card>
        }
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .flashcards {
        margin: 0 auto;
        max-width: 1400px;
        padding: var(--sz-120) var(--sz-30);
        position: relative;
        &-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--sz-50);
        }
      }

      @media (max-width: 768px) {
        .flashcards-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export default class Flashcards {
  protected readonly categories = CATEGORIES;
}
