import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CardData } from '../interfaces/card-data';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card" [class.selected]="selected()" (click)="onToggle()">
      @if(selected()) {
      <div class="card__checkmark">✔</div>
      }

      <div class="card__icon">{{ cardData().icon }}</div>
      <h3 class="card__title">{{ cardData().title }}</h3>
      <p class="card__caption">
        {{ cardData().caption }}
      </p>
    </article>
  `,
  styles: [
    `
      .card {
        height: 100%;
        background: var(--cl-dark-02);
        border: 1px solid var(--cl-light-02);
        padding: var(--sz-40);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02);
        will-change: transform, filter;
        transition: transform 120ms ease, box-shadow 120ms ease,
          border-color 120ms ease;
        &:hover {
          cursor: pointer;
          animation: glitch1 600ms ease-in-out;
          box-shadow: 0 30px 60px var(--cl-primary-02);
          transform: translateY(-2px);
        }
        &.selected {
          border-color: var(--cl-primary);
          box-shadow: 0 0 0 2px
              color-mix(in oklab, var(--cl-primary) 45%, transparent),
            0 20px 50px var(--cl-primary-02);
        }
        &__checkmark {
          position: absolute;
          top: var(--sz-14);
          right: var(--sz-14);
          display: grid;
          place-items: center;
          font-weight: 700;
          width: var(--sz-30);
          height: var(--sz-30);
          border-radius: 50%;
          background: var(--cl-primary);
          color: var(--cl-dark);
        }
        &__icon {
          width: var(--sz-80);
          height: var(--sz-80);
          background: linear-gradient(
            135deg,
            var(--cl-primary),
            var(--cl-accent-a)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--sz-40);
        }
        &__title {
          text-transform: uppercase;
          font-size: var(--sz-22);
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--cl-primary);
          margin: var(--sz-20) 0 0 0;
        }
        &__caption {
          margin-top: var(--sz-10);
          color: var(--cl-light-06);
          line-height: var(--sz-26);
        }
      }

      @keyframes glitch1 {
        0% {
          filter: drop-shadow(0 0 0 var(--cl-primary-02));
          transform: translateY(0);
        }
        25% {
          filter: drop-shadow(2px 0 0 var(--cl-accent-a));
          transform: translate(-1px, -1px);
        }
        50% {
          filter: drop-shadow(-2px 0 0 var(--cl-primary));
          transform: translate(1px, 1px);
        }
        75% {
          filter: drop-shadow(2px 0 0 var(--cl-accent-a));
          transform: translate(-1px, 0);
        }
        100% {
          filter: drop-shadow(0 0 0 var(--cl-primary-02));
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class Card {
  readonly cardData = input.required<CardData>();

  readonly selectable = input(true);
  readonly selected = input(false);
  readonly toggled = output<void>();

  protected onToggle(): void {
    if (this.selectable()) this.toggled.emit();
  }
}
