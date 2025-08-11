import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <a class="logo" href="/" aria-label="Go to homepage"></a> `,
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
          &::before {
            text-shadow: 0 0 30px var(--cl-primary);
          }
        }
        &::before {
          content: '🔮';
        }
      }
    `,
  ],
})
export class NavbarLogo {}
