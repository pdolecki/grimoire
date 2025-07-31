import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type NavLink = { label: string; href: string };

@Component({
  selector: 'app-navbar-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="links">
      @for (link of links(); track link.href) {
      <li>
        <a [href]="link.href">{{ link.label }}</a>
      </li>
      }
    </ul>
  `,
  styles: [
    `
      .links {
        display: flex;
        list-style: none;
        gap: var(--sz-50);

        a {
          color: var(--cl-light-06);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
          font-size: var(--sz-16);
          letter-spacing: 1px;

          &:hover,
          &:focus-visible {
            color: var(--cl-primary);
            text-shadow: 0 0 10px var(--cl-primary);

            &::before {
              width: 100%;
            }
          }

          &::before {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(
              90deg,
              var(--cl-primary),
              var(--cl-accent-a)
            );
            transition: width 0.3s ease;
            box-shadow: 0 0 10px var(--cl-primary);
          }
        }
      }

      /* Desktop */
      @media (min-width: 920px) {
        .links {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 0 2rem;
          max-width: none;

          a {
            padding: 0;
            border-bottom: none;

            &:hover,
            &:focus-visible {
              background: none;
              transform: none;
              padding-left: 0;
            }

            &::before {
              display: none;
            }
          }
        }
      }

      @media (max-width: 920px) {
        .links {
          display: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .links a {
          transition: none;
          text-shadow: none;
        }
      }
    `,
  ],
})
export class NavbarLinks {
  readonly links = input<NavLink[]>([
    { label: 'Home', href: 'home' },
    { label: 'Flashcards', href: 'flashcards' },
    { label: 'Articles', href: 'articles' },
  ]);
}
