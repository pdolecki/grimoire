import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background-gradient',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  styles: [
    `
      :host {
        position: fixed;
        inset: 0;
        z-index: -5;
        pointer-events: none;
        contain: layout paint style;
        display: block;
      }

      :host::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle at 10% 20%,
            var(--cl-primary-02, #5c7cff) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 70% 60%,
            var(--cl-secondary-02, #ff6aa6) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 30% 70%,
            var(--cl-accent-a-02, #30e0a1) 0%,
            transparent 50%
          ),
          radial-gradient(
            circle at 50% 10%,
            var(--cl-accent-b-02, #ffd166) 0%,
            transparent 50%
          );
        filter: blur(var(--bg-blur, 40px));
        animation: gradientRotate var(--bg-anim-duration, 30s) linear infinite;
        will-change: transform;
      }

      @media (prefers-reduced-motion: reduce) {
        :host::before {
          animation: none;
        }
      }

      @keyframes gradientRotate {
        0% {
          transform: rotate(0deg) scale(1);
        }
        50% {
          transform: rotate(180deg) scale(1.2);
        }
        100% {
          transform: rotate(360deg) scale(1);
        }
      }
    `,
  ],
})
export class BackgroundGradient {}
