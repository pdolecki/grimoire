import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CardModel } from '../shared/interfaces/card-model';

@Component({
  selector: 'app-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="card"
      [class.-selected]="selected()"
      [attr.role]="selectable() ? 'button' : null"
      [attr.tabindex]="selectable() ? 0 : null"
      [attr.aria-pressed]="selectable() ? selected() : null"
      (click)="onToggle()"
      (keydown.enter)="onToggle()"
      (keydown.space)="onToggle(); $event.preventDefault()"
      role="listitem"
    >
      <div class="icon" aria-hidden="true">{{ cardData().icon }}</div>
      <h3 class="title">{{ cardData().title }}</h3>
      <p class="caption">
        {{ cardData().caption }}
      </p>

      @if(selected()) {

      <div class="checkmark" aria-hidden="true">✔</div>
      }
    </article>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }

      .card {
        height: 100%;
        background: var(--cl-dark-02);
        border: 1px solid var(--cl-light-02);
        padding: var(--sz-40);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02);
        position: relative;
        outline: none;
        will-change: transform, filter;
        transition: transform 120ms ease, box-shadow 120ms ease,
          border-color 120ms ease;
      }

      .card:hover,
      .card:focus-visible {
        cursor: pointer;
        animation: glitch1 600ms ease-in-out;
        box-shadow: 0 30px 60px var(--cl-primary-02);
        transform: translateY(-2px);
      }

      /* Selected state — subtle, respects your palette */
      .card.-selected {
        border-color: var(--cl-primary);
        box-shadow: 0 0 0 2px
            color-mix(in oklab, var(--cl-primary) 45%, transparent),
          0 20px 50px var(--cl-primary-02);
      }

      .checkmark {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-weight: 700;
        background: var(--cl-primary);
        color: #051016;
        box-shadow: 0 0 12px var(--cl-primary-06);
      }

      .icon {
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
        border-radius: 12px;
      }

      .title {
        text-transform: uppercase;
        font-size: var(--sz-22);
        font-weight: 700;
        letter-spacing: 1px;
        color: var(--cl-primary);
        margin: var(--sz-20) 0 0 0;
      }

      .caption {
        margin-top: var(--sz-10);
        color: var(--cl-light-06);
        line-height: var(--sz-26);
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

      @media (prefers-reduced-motion: reduce) {
        .card {
          transition: none;
        }
        .card:hover,
        .card:focus-visible {
          animation: none;
          transform: none;
        }
      }
    `,
  ],
})
export class Card {
  readonly cardData = input.required<CardModel>();
  readonly selectable = input(true);
  readonly selected = input(false);
  readonly toggled = output<void>();

  onToggle() {
    if (this.selectable()) this.toggled.emit();
  }
}
