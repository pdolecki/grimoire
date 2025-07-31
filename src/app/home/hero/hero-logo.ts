import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-logo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1 class="hero-logo"><span>GRIM</span><span>OIRE</span></h1> `,
  styles: [
    `
      /* Keyframes must be top-level (not nested) */
      @keyframes pulsePrimary {
        0%,
        100% {
          filter: brightness(1) drop-shadow(0 0 15px var(--cl-primary-06));
          transform: translateY(0) scale(1);
        }
        50% {
          filter: brightness(1.1) drop-shadow(0 0 25px var(--cl-primary-08));
          transform: translateY(-2px) scale(1.01);
        }
      }

      @keyframes pulseSecondary {
        0%,
        100% {
          filter: brightness(1) drop-shadow(0 0 15px var(--cl-secondary-06));
          transform: translateY(0) scale(1);
        }
        50% {
          filter: brightness(1.1) drop-shadow(0 0 25px var(--cl-secondary-08));
          transform: translateY(-2px) scale(1.01);
        }
      }

      .hero-logo {
        font-size: var(--sz-100);
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 0 0 2rem 0; /* single declaration */

        span {
          /* gradient text: standard + Safari fallbacks */
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        span:first-of-type {
          background-image: linear-gradient(
            135deg,
            var(--cl-primary-06),
            var(--cl-primary)
          );
          animation: pulsePrimary 3s ease-in-out infinite;
        }

        span:last-of-type {
          background-image: linear-gradient(
            135deg,
            var(--cl-accent-a),
            var(--cl-secondary)
          );
          animation: pulseSecondary 3s ease-in-out infinite;
        }
      }

      @media (max-width: 480px) {
        .hero-logo {
          font-size: var(--sz-60);
        }
        .hero-logo span {
          display: block;
          line-height: 1em;
        }
      }

      /* Accessibility: respect reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .hero-logo span {
          animation: none !important;
          transform: none !important;
          filter: none !important;
        }
      }
    `,
  ],
})
export class HeroLogo {}
