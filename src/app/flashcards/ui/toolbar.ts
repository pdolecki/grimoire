import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Button } from '../../shared/ui/button';

@Component({
  selector: 'app-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Button],
  template: `
    <div class="toolbar">
      <app-button
        label="Select all"
        size="small"
        variant="secondary"
        (click)="selectAll.emit()"
      ></app-button>
      <app-button
        label="Clear"
        size="small"
        variant="secondary"
        (click)="clear.emit()"
      ></app-button>
      <span class="count" aria-live="polite">
        {{ selectedCount() }} selected
      </span>
      <app-button
        label="Start Learning"
        size="small"
        (click)="startLearning.emit()"
      ></app-button>
    </div>
  `,
  styles: [
    `
      .toolbar {
        z-index: 10;
        display: flex;
        align-items: center;
        gap: var(--sz-20);
        padding: var(--sz-16) var(--sz-20);
        background: var(--cl-dark-02);
        border: 1px solid var(--cl-light-02);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02);
        & > :last-child {
          margin-left: auto;
        }
      }
      @media (max-width: 768px) {
        .toolbar {
          position: sticky;
          top: var(--nav-height);
          display: grid;
          grid-template-columns: 1fr 1fr;
          & > :last-child {
            margin-left: 0;
          }
        }
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
