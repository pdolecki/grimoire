import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  signal,
} from '@angular/core';

type Stream = {
  topPct: number; // 0–100
  delaySec: number; // 0–5
  rotateDeg: number; // -15–15
};

@Component({
  selector: 'app-background-streams',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle],
  template: `
    <div class="data-streams" aria-hidden="true">
      @for (s of streams(); track $index) {
      <div
        class="data-stream"
        [ngStyle]="{
          top: s.topPct + '%',
          left: '-300px',
          'animation-delay': s.delaySec + 's',
          transform: 'rotate(' + s.rotateDeg + 'deg)'
        }"
        role="none"
      ></div>
      }
    </div>
  `,
  styles: [
    `
      .data-streams {
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        overflow: hidden;
        z-index: -3;
        pointer-events: none;
      }

      .data-stream {
        position: absolute;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          var(--cl-primary),
          transparent
        );
        opacity: 0;
        animation: dataFlow 3s ease-in-out infinite;
      }

      .data-stream:nth-child(odd) {
        background: linear-gradient(
          90deg,
          transparent,
          var(--cl-secondary),
          transparent
        );
        animation-duration: 4s;
      }

      @keyframes dataFlow {
        0% {
          width: 0;
          opacity: 0;
          transform: translateX(0);
        }
        50% {
          width: 300px;
          opacity: 0.8;
        }
        100% {
          width: 0;
          opacity: 0;
          transform: translateX(100vw);
        }
      }

      @media (max-width: 768px) {
        .data-streams {
          display: none;
        }
      }
    `,
  ],
})
export class BackgroundStreams {
  @HostListener('window:resize')
  onResize() {
    this.vw.set(window.innerWidth);
    this.vh.set(window.innerHeight);
  }

  private vw = signal<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  private vh = signal<number>(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );

  private streamCount = computed(() => {
    const base = Math.floor(this.vh() / 80);
    return Math.max(8, Math.min(20, base));
  });

  readonly streams = computed<Stream[]>(() => {
    const count = this.streamCount();
    const arr: Stream[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        topPct: Math.random() * 100,
        delaySec: Math.random() * 5,
        rotateDeg: Math.random() * 30 - 15,
      });
    }
    return arr;
  });
}
