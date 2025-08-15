import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { SectionHeader } from '../shared/ui/section-header';
import { CATEGORIES } from '../shared/constants/categories';
import { Card } from './ui/card';
import { Toolbar } from './ui/toolbar';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card, Toolbar],
  template: `
    <section class="flashcards" aria-labelledby="flashcards-heading">
      <app-section-header
        id="flashcards-heading"
        title="Modules"
        subtitle="Choose the flashcard modules you’re interested in studying or continue the last session."
      ></app-section-header>

      <app-toolbar
        [selectedCount]="selectedCount()"
        (startLearning)="startLearning()"
        (selectAll)="selectAll()"
        (clear)="clear()"
      ></app-toolbar>

      <div class="flashcards-grid" role="list">
        @for (category of categories; track category.id) {
        <app-card
          [cardData]="category"
          [selected]="isSelected(category.id)"
          (toggled)="toggle(category.id)"
        ></app-card>
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

  protected readonly categories = CATEGORIES;

  private readonly selected = signal<Set<string>>(new Set());
  protected readonly selectedCount = computed(() => this.selected().size);
  protected isSelected = (id: string) => this.selected().has(id);

  @ViewChild('toolbar', { static: true }) toolbarRef!: ElementRef<HTMLElement>;
  private readonly toolbarInView = signal(true);

  protected toggle(id: string) {
    this.selected.update((set) => {
      const next = new Set(set);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  protected selectAll() {
    this.selected.set(new Set(this.categories.map((c) => c.id)));
  }

  protected clear() {
    this.selected.set(new Set());
  }

  protected startLearning() {
    const ids = Array.from(this.selected());
    this.router.navigate(['/learn'], {
      queryParams: { categories: ids.join(',') },
    });
  }
}
