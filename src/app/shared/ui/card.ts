import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  signal,
} from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-card',
  imports: [Button],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card bg-box">
      <p class="card-title">{{ question() }}</p>
      <p class="card-description">
        @if (showAnswer()) {
        {{ answer() }}
        } @else {
        <app-button
          [label]="'Show answer'"
          (clicked)="showAnswer.set(true)"
        ></app-button>
        }
      </p>
    </div>
  `,
  styles: `
  .card {
    max-width: 550px;
    width: 100%;
    background: linear-gradient(71deg, var(--color-surface), var(--color-background), var(--color-surface));
    border-radius: 3rem;
    padding: 40px;

    &.bg-box {
      position: relative;
      &::after {
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        content: "";
        z-index: -1;
        border-radius: 45px;
        background: linear-gradient(31deg, var(--color-background), var(--color-primary), var(--color-background));
      }
    }

    &-title {
      font-weight: 600;
      color: white;
      letter-spacing: -0.02em;
      line-height: 40px;
      font-style: normal;
      font-size: 28px;
      padding-bottom: 8px;
    }

    &-description {
      font-weight: 600;
      line-height: 32px;
      color: hsla(0, 0%, 100%, 0.5);
      font-size: 16px;
      max-width: 470px;
      white-space: pre-line;
    }
}
  `,
})
export class Card {
  readonly question = input.required<string>();
  readonly answer = input.required<string>();

  protected showAnswer = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.question();
      this.showAnswer.set(false);
    });
  }
}
