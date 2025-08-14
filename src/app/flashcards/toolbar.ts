import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      #toolbar
      class="toolbar sticky"
      role="group"
      aria-label="Selection controls"
    >
      <button type="button" class="btn" (click)="selectAll.emit()">
        Select all
      </button>
      <button type="button" class="btn" (click)="clear.emit()">Clear</button>
      <span class="count" aria-live="polite">
        {{ selectedCount() }} selected
      </span>
      <button
        type="button"
        class="btn primary"
        [disabled]="selectedCount() > 0"
        (click)="startLearning.emit()"
      >
        Start learning
      </button>
    </div>
  `,
  styles: [
    `
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

      @media (max-width: 768px) {
        .toolbar.sticky {
          position: sticky;
          top: var(--nav-height);
        }
      }

      .btn {
        appearance: none;
        border: 1px solid var(--cl-light-02);
        background: var(--cl-dark-02);
        color: var(--cl-light-06);
        padding: 8px 14px;
        border-radius: 10px;
        transition: transform 120ms ease, box-shadow 120ms ease,
          border-color 120ms ease;
      }
      .btn:hover,
      .btn:focus-visible {
        border-color: var(--cl-primary);
        box-shadow: 0 0 0 2px
          color-mix(in oklab, var(--cl-primary) 30%, transparent);
        transform: translateY(-1px);
      }
      .btn.primary {
        background: linear-gradient(
          135deg,
          var(--cl-primary),
          var(--cl-accent-a)
        );
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

      .count {
        opacity: 0.8;
      }
    `,
  ],
})
export class Toolbar {
  readonly selectedCount = input.required<number>();
  readonly startLearning = output<void>();
  readonly selectAll = output<void>();
  readonly clear = output<void>();
}
