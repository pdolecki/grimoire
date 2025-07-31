import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (!href()) {
    <button
      type="button"
      class="button"
      [class.primary]="variant() === 'primary'"
      [class.secondary]="variant() === 'secondary'"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel() || label()"
    >
      {{ label() }}
    </button>
    } @else {
    <a
      class="button"
      [class.primary]="variant() === 'primary'"
      [class.secondary]="variant() === 'secondary'"
      [href]="href()"
      rel="noopener noreferrer"
      [attr.aria-label]="ariaLabel() || label()"
    >
      {{ label() }}
    </a>
    }
  `,
  styles: [
    `
      .button {
        padding: var(--sz-20) var(--sz-30);
        text-transform: uppercase;
        font-size: var(--sz-18);
        font-weight: 900;
        letter-spacing: 2px;
        transition: all 0.5s ease;
        display: inline-block;
        text-align: center;
        text-decoration: none;
      }

      .primary {
        border: none;
        color: var(--cl-dark);
        background: linear-gradient(
          135deg,
          var(--cl-primary),
          var(--cl-accent-a)
        );
      }
      .primary:hover {
        cursor: pointer;
        color: var(--cl-accent-b);
        background: var(--cl-dark-04);
      }

      .secondary {
        background: transparent;
        color: var(--cl-primary);
        border: 2px solid var(--cl-primary);
      }
      .secondary:hover {
        cursor: pointer;
        background: var(--cl-primary);
        color: var(--cl-dark);
      }

      @media (max-width: 768px) {
        .button {
          width: 100%;
          max-width: 300px;
        }
      }

      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,
  ],
})
export class Button {
  readonly label = input.required<string>();
  readonly variant = input.required<'primary' | 'secondary'>();
  readonly href = input<string | null>(null); // optional for anchor mode
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string | null>(null);
}
