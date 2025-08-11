import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-background-particles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="particles" #particlesContainer></div> `,
  styles: [
    `
      .particles {
        position: fixed;
        inset: 0;
        overflow: hidden;
        z-index: var(--bg-particles-layer, -3);
        pointer-events: none;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--cl-primary);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--cl-primary);
        animation: float 20s infinite;
        opacity: 0;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        will-change: transform, opacity;
      }

      .particle:nth-child(odd) {
        background: var(--cl-secondary);
        box-shadow: 0 0 10px var(--cl-secondary);
        animation-duration: 25s;
      }

      @keyframes float {
        0% {
          transform: translateY(100vh) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(100px);
          opacity: 0;
        }
      }

      @media (max-width: 768px) {
        .particles {
          opacity: 0.5;
        }
        .particle {
          animation-duration: 30s !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .particle {
          animation: none;
          opacity: 0.3;
        }
      }
    `,
  ],
})
export class BackgroundParticles implements AfterViewInit {
  @ViewChild('particlesContainer', { static: true })
  private container!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.generateParticles();
  }

  @HostListener('window:resize')
  onResize() {
    this.generateParticles();
  }

  private generateParticles() {
    const root = this.container.nativeElement;
    root.textContent = '';

    const particleCount = 50;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = this.renderer.createElement('div');
      this.renderer.addClass(particle, 'particle');

      this.renderer.setStyle(particle, 'top', `${Math.random() * 100}%`);
      this.renderer.setStyle(particle, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(
        particle,
        'opacity',
        `${(Math.random() * 0.5 + 0.3).toFixed(2)}`
      );
      this.renderer.setStyle(
        particle,
        'animationDuration',
        `${(Math.random() * 6 + 4).toFixed(2)}s`
      );
      this.renderer.setStyle(
        particle,
        'animationDelay',
        `${(Math.random() * 4).toFixed(2)}s`
      );

      this.renderer.setStyle(
        particle,
        'background',
        i % 2 === 0 ? 'var(--cl-primary)' : 'var(--cl-secondary)'
      );
      this.renderer.setStyle(
        particle,
        'boxShadow',
        i % 2 === 0
          ? '0 0 10px var(--cl-primary)'
          : '0 0 10px var(--cl-secondary)'
      );

      frag.appendChild(particle);
    }

    root.appendChild(frag);
  }
}
