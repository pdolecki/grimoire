import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <a class="logo" href="/" aria-label="Go to homepage">Grimoire</a> `,
  styles: [
    `
      .logo {
        font-size: var(--sz-30);
        font-weight: 700;
        color: var(--cl-primary);
        position: relative;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          text-shadow: 0 0 30px var(--cl-primary);

          &::before {
            margin-right: var(--sz-6);
            text-shadow: 0 0 30px var(--cl-accent-b);
          }
        }

        &::before {
          content: '🔮';
          color: var(--cl-accent-b);
        }
      }
    `,
  ],
})
export class NavbarLogo {}
