import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (!href()) {
    <button
      type="button"
      [class]="buttonClasses()"
      [disabled]="disabled()"
      [attr.aria-label]="ariaLabel() || label()"
    >
      {{ label() }}
    </button>
    } @else {
    <a
      [class]="buttonClasses()"
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

        background: transparent;
        color: var(--cl-primary);
        border: 2px solid var(--cl-primary);
        &:hover {
          cursor: pointer;
          background: var(--cl-primary);
          color: var(--cl-dark);
        }

        &.small {
          text-transform: none;
          font-size: var(--sz-16);
          padding: var(--sz-8) var(--sz-14);
        }

        &.primary {
          border: none;
          color: var(--cl-dark);
          background: linear-gradient(
            135deg,
            var(--cl-primary),
            var(--cl-accent-a)
          );
          &:hover {
            color: var(--cl-accent-b);
            background: var(--cl-dark-04);
          }
        }
      }

      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      @media (max-width: 768px) {
        .button {
          width: 100%;
          max-width: 300px;
        }
      }
    `,
  ],
})
export class Button {
  readonly label = input.required<string>();
  readonly size = input<'small' | 'normal'>('normal');
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly href = input<string | null>(null); // optional for anchor mode
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string | null>(null);

  buttonClasses = computed(() => ({
    button: true,
    small: this.size() === 'small',
    primary: this.variant() === 'primary',
    disabled: this.disabled(),
  }));
}
