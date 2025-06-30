import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="button" role="button" (click)="clicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: `
    .button {
      color: white;
      padding: 1rem 3rem;
      font-size: 2rem;
      background: linear-gradient(71deg, var(--color-surface), var(--color-background), var(--color-surface));
      border: 2px solid var(--color-primary);
      border-radius: 3rem;
      &:hover {
        cursor: pointer;
      }
    }
  `,
})
export class Button {
  readonly label = input.required<string>();
  readonly clicked = output<void>();
}
