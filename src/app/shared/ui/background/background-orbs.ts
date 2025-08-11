import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background-orbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="orb orb1"></span>
    <span class="orb orb2"></span>
    <span class="orb orb3"></span>
  `,
  styles: [
    `
      :host {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: var(--bg-orbs-layer, 0);
        contain: layout paint style;
        display: block;
      }

      .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(var(--orb-blur, 80px));
        opacity: var(--orb-opacity, 0.5);
        animation: orbFloat var(--orb-duration, 20s) ease-in-out infinite;
        will-change: transform;
      }

      .orb1 {
        width: var(--orb1-size, 300px);
        height: var(--orb1-size, 300px);
        background: var(--primary-cyan, #37e7f7);
        top: 10%;
        left: -150px;
        animation-delay: 0s;
      }

      .orb2 {
        width: var(--orb2-size, 400px);
        height: var(--orb2-size, 400px);
        background: var(--primary-pink, #ff6aa6);
        bottom: 10%;
        right: -200px;
        animation-delay: 5s;
      }

      .orb3 {
        width: var(--orb3-size, 250px);
        height: var(--orb3-size, 250px);
        background: var(--primary-purple, #9b6dff);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-delay: 10s;
      }

      @keyframes orbFloat {
        0%,
        100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(100px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-50px, 100px) scale(0.9);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .orb {
          animation: none;
        }
      }

      @media (max-width: 768px) {
        .orb {
          animation: none;
        }
      }
    `,
  ],
})
export class BackgroundOrbs {}
