import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
} from '@angular/core';

type NavLink = { label: string; href: string };

@Component({
  selector: 'app-navbar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="menu" aria-label="Mobile navigation">
      <ul role="menu">
        @for (link of links(); track $index) {
        <li>
          <a role="menuitem" [href]="link.href" (click)="closed.emit()">{{
            link.label
          }}</a>
        </li>
        }
      </ul>
    </nav>
  `,
  styles: [
    `
      .menu {
        z-index: 9999;
        position: fixed;
        top: 85px;
        right: 0;
        width: 80%;
        max-width: 350px;
        height: calc(100dvh - 85px);
        background: var(--cl-dark-04);
        backdrop-filter: blur(20px);
        border-left: 1px solid var(--cl-light-02);
        box-shadow: -10px 0 30px var(--cl-dark-06);
        display: flex;
        flex-direction: column;

        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          a {
            display: block;
            padding: var(--sz-22) var(--sz-30);
            color: var(--cl-light-06);
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: var(--sz-18);
            transition: all 0.3s ease;
            position: relative;
            border-bottom: 1px solid var(--cl-light-02);

            &:hover {
              color: var(--cl-primary);
              background: var(--cl-primary-02);
              padding-left: var(--sz-50);
              text-shadow: 0 0 10px var(--cl-primary);

              &::before {
                opacity: 1;
                transform: translateX(0);
              }
            }

            &::before {
              content: '>';
              position: absolute;
              left: var(--sz-30);
              opacity: 0;
              transform: translateX(-10px);
              transition: all 0.3s ease;
              color: var(--cl-accent-b);
            }
          }
        }
      }

      @media (max-width: 480px) {
        .menu {
          width: 90%;
          max-width: none;
        }

        a {
          padding: 1.2rem 1.5rem;
          font-size: 1rem;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .menu * {
          transition: none !important;
        }
      }
    `,
  ],
})
export class NavbarMenu {
  readonly closed = output<void>();

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closed.emit();
  }

  readonly links = input<NavLink[]>([
    { label: 'Home', href: 'home' },
    { label: 'Flashcards', href: 'flashcards' },
    { label: 'Articles', href: 'articles' },
  ]);
}
