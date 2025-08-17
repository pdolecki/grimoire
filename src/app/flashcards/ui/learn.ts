import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { Flashcard } from '../interfaces/flashcard';
import { Button } from '../../shared/ui/button';

@Component({
  selector: 'app-learn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  template: `
    <section class="learn">
      <app-button
        label="Draw another"
        (click)="drawAnother()"
        [disabled]="flashcards().length === 0"
      ></app-button>

      @if (current(); as c) {
      <article class="card">
        <div class="badge">{{ c.category }}</div>
        <h2 class="question">{{ c.question }}</h2>

        @if (revealed()) {
        <pre class="answer" aria-live="polite">{{ c.answer }}</pre>
        } @else {
        <app-button
          label="Reveal"
          variant="secondary"
          (click)="reveal()"
        ></app-button>
        }
      </article>
      } @else {
      <div class="empty">
        <h3>No flashcards</h3>
        <p>Add some cards or select modules to begin.</p>
      </div>
      }
    </section>
  `,
  styles: [
    `
      .learn {
        display: grid;
        gap: 20px;
        max-width: 900px;
        margin: 0 auto;
        padding: 24px;
      }
      .card {
        border: 1px solid var(--cl-light-02, #1e2a33);
        border-radius: 12px;
        background: color-mix(
          in oklab,
          var(--cl-dark-02, #0c1318) 92%,
          transparent
        );
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02, rgba(0, 170, 255, 0.15));
        padding: 20px;
        display: grid;
        gap: 12px;
      }
      .badge {
        font-size: 12px;
        opacity: 0.8;
        border: 1px solid var(--cl-light-02, #1e2a33);
        border-radius: 999px;
        padding: 2px 8px;
        width: fit-content;
      }
      .question {
        margin: 0;
        color: var(--cl-primary, #1ec8ff);
      }
      .answer {
        margin: 0;
        white-space: pre-wrap;
        line-height: 1.6;
        color: var(--cl-light-06, #b6c3cb);
      }
      .empty {
        text-align: center;
        opacity: 0.8;
      }
    `,
  ],
})
export class Learn {
  // REQUIRED input — do not read it during field initialization
  readonly flashcards = input.required<Flashcard[]>();

  private readonly idx = signal<number | null>(null);
  protected readonly revealed = signal(false);

  // Current flashcard derived from input + index
  protected readonly current = computed(() => {
    const list = this.flashcards();
    const i = this.idx();
    return list.length && i !== null ? list[i] : null;
  });

  // Initialize AFTER the input arrives/changes
  private readonly init = effect(
    () => {
      const list = this.flashcards(); // tracks input
      if (!list.length) {
        this.idx.set(null);
        this.revealed.set(false);
        return;
      }
      // pick an initial random index
      this.idx.set(this.randomIndex(list.length));
      this.revealed.set(false);
    },
    { allowSignalWrites: true }
  );

  protected reveal() {
    this.revealed.set(true);
  }

  protected drawAnother() {
    const list = this.flashcards();
    if (!list.length) return;
    const current = this.idx();
    let next = this.randomIndex(list.length);
    // avoid immediate repeat if possible
    if (list.length > 1 && next === current) {
      next = (next + 1) % list.length;
    }
    this.idx.set(next);
    this.revealed.set(false);
  }

  private randomIndex(len: number) {
    return Math.floor(Math.random() * len);
  }
}
