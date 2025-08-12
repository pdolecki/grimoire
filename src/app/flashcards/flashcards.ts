import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  DestroyRef,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { SectionHeader } from '../shared/ui/section-header';
import { CATEGORIES } from '../shared/constants/categories';
import { Card } from '../shared/ui/card/card';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Card],
  template: `
    <section class="flashcards" aria-labelledby="flashcards-heading">
      <app-section-header
        id="flashcards-heading"
        title="Modules"
        subtitle="Choose the flashcard modules you’re interested in studying or continue the last session."
      ></app-section-header>

      <!-- Top toolbar -->
      <div #toolbar class="toolbar sticky" role="group" aria-label="Selection controls">
        <button type="button" class="btn" (click)="selectAll()">Select all</button>
        <button type="button" class="btn" (click)="clear()">Clear</button>
        <span class="count" aria-live="polite">{{ selectedCount() }} selected</span>
        <button type="button" class="btn primary" [disabled]="!anySelected()" (click)="startLearning()">
          Start learning
        </button>
      </div>

      <div class="flashcards-grid" role="list">
        @for (category of categories; track category.id) {
          <app-card
            [cardData]="category"
            [selected]="isSelected(category.id)"
            (toggled)="toggle(category.id)"
          ></app-card>
        }
      </div>

      <!-- Bottom mobile action bar:
           appears only when (a) something is selected AND (b) the top toolbar is out of view -->
      @if (showMobileBar()) {
        <div class="mobile-cta" role="group" aria-label="Selected actions">
          <span class="mobile-count">{{ selectedCount() }} selected</span>
          <button type="button" class="btn ghost" (click)="clear()">Clear</button>
          <button type="button" class="btn primary" (click)="startLearning()">Start</button>
        </div>
      }
    </section>
  `,
  styles: [`
    :host { display: block; }

    .flashcards {
      margin: 0 auto;
      max-width: 1400px;
      padding: var(--sz-120) var(--sz-30);
      position: relative;
    }

    /* Toolbar */
    .toolbar {
      display: flex;
      gap: var(--sz-16, 12px);
      align-items: center;
      margin-bottom: var(--sz-30);
      flex-wrap: wrap;
      border: 1px solid var(--cl-light-02);
      border-radius: 12px;
      background: color-mix(in oklab, var(--cl-dark-02) 85%, transparent);
      backdrop-filter: blur(10px);
      padding: var(--sz-16);
      z-index: 10;
    }

    /* Sticky only on tablet/desktop */
    @media (min-width: 769px) {
      .toolbar.sticky {
        position: sticky;
        top: calc(0px + env(safe-area-inset-top));
      }
    }

    .btn {
      appearance: none;
      border: 1px solid var(--cl-light-02);
      background: var(--cl-dark-02);
      color: var(--cl-light-06);
      padding: 8px 14px;
      border-radius: 10px;
      transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
    }
    .btn:hover,
    .btn:focus-visible {
      border-color: var(--cl-primary);
      box-shadow: 0 0 0 2px color-mix(in oklab, var(--cl-primary) 30%, transparent);
      transform: translateY(-1px);
    }
    .btn.primary {
      background: linear-gradient(135deg, var(--cl-primary), var(--cl-accent-a));
      color: #051016;
      border-color: transparent;
      font-weight: 700;
    }
    .btn.primary:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    .btn.ghost {
      background: transparent;
      border-color: var(--cl-light-02);
    }

    .count { opacity: 0.8; }

    .flashcards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--sz-50);
      align-items: stretch;
    }
    .flashcards-grid > app-card { display: block; height: 100%; }

    /* Bottom mobile call-to-action bar */
    .mobile-cta {
      position: fixed;
      left: var(--sz-20, 16px);
      right: var(--sz-20, 16px);
      bottom: calc(12px + env(safe-area-inset-bottom));
      z-index: 50;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      border: 1px solid var(--cl-light-02);
      border-radius: 14px;
      background: color-mix(in oklab, var(--cl-dark-02) 92%, transparent);
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px var(--cl-primary-02);
    }
    .mobile-cta .mobile-count { font-weight: 600; color: var(--cl-light-06); }

    /* Hide the mobile bar entirely on wider screens */
    @media (min-width: 769px) {
      .mobile-cta { display: none; }
    }

    @media (max-width: 768px) {
      .flashcards-grid { grid-template-columns: 1fr; }
    }
  `],
})
export default class Flashcards implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly categories = CATEGORIES;

  private readonly selected = signal<Set<string>>(new Set());
  protected readonly selectedCount = computed(() => this.selected().size);
  protected readonly anySelected = computed(() => this.selected().size > 0);
  protected isSelected = (id: string) => this.selected().has(id);

  // Track if the top toolbar is in the viewport (on mobile it will scroll away)
  @ViewChild('toolbar', { static: true }) toolbarRef!: ElementRef<HTMLElement>;
  private readonly toolbarInView = signal(true);

  // Compute if mobile bar should be visible:
  // - must have any selection
  // - and toolbar is NOT visible
  protected readonly showMobileBar = computed(
    () => this.anySelected() && !this.toolbarInView()
  );

  ngAfterViewInit(): void {
    // Only run in browser (safe for SSR)
    if (typeof window === 'undefined' || !this.toolbarRef?.nativeElement) return;

    const target = this.toolbarRef.nativeElement;

    const observer = new IntersectionObserver(
      (entries) => {
        // If any part of toolbar is visible, consider it "in view"
        const entry = entries[0];
        this.toolbarInView.set(entry.isIntersecting);
      },
      {
        root: null,         // viewport
        threshold: 0,       // consider visible if it intersects at all
      }
    );

    observer.observe(target);

    // Cleanup
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

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

  // Optional: persist selection for "continue last session"
  private persist = effect(() => {
    const ids = Array.from(this.selected());
    try {
      localStorage.setItem('selectedCategories', JSON.stringify(ids));
    } catch { /* storage may be disabled */ }
  });

  constructor() {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('selectedCategories') : null;
    if (raw) {
      try { this.selected.set(new Set(JSON.parse(raw))); } catch { /* ignore */ }
    }
  }
}
