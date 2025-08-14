import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  effect,
  signal,
} from '@angular/core';
import { NavbarLogo } from './navbar-logo';
import { NavbarLinks } from './navbar-links';
import { NavbarMenu } from './navbar-menu';

const BREAKPOINT = 920; // keep in sync with CSS @media

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarLogo, NavbarLinks, NavbarMenu],
  template: `
    <nav class="navbar">
      <app-navbar-logo />
      <app-navbar-links />

      <button
        type="button"
        class="menu-button"
        [class.active]="isOpened()"
        [attr.aria-expanded]="isOpened()"
        aria-label="Open navigation menu"
        aria-haspopup="menu"
        aria-controls="mobileMenu"
        (click)="toggle()"
      >
        <div class="hamburger" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </button>
    </nav>

    @if (isOpened()) {
    <div class="overlay" (click)="close()"></div>
    <app-navbar-menu id="mobileMenu" (closed)="close()" />
    }
  `,
  styles: [
    `
      .navbar {
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100%;
        height: var(--nav-height);
        padding: 1rem 2rem;
        background: var(--cl-dark-04);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--cl-light-02);
        box-shadow: 0 2px 30px var(--cl-primary-02);

        .menu-button {
          display: none;
          background: none;
          border: none;
          color: var(--cl-primary);
          font-size: 1.5rem;
          cursor: pointer;
          position: relative;
          width: 30px;
          height: 30px;
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }

          .hamburger {
            position: relative;
            width: 25px;
            height: 20px;
            margin: auto;
            span {
              display: block;
              position: absolute;
              height: 2px;
              width: 100%;
              background: var(--cl-primary);
              border-radius: 1px;
              opacity: 1;
              left: 0;
              transform: rotate(0deg);
              transition: all 0.25s ease-in-out;
              box-shadow: 0 0 5px var(--cl-primary);
              transform-origin: center;

              &:nth-child(1) {
                top: 0px;
              }
              &:nth-child(2) {
                top: 9px;
              }
              &:nth-child(3) {
                top: 18px;
              }
            }
          }

          &.active {
            .hamburger span:nth-child(1) {
              top: 9px;
              transform: rotate(135deg);
              background: var(--cl-accent-b);
            }
            .hamburger span:nth-child(2) {
              opacity: 0;
              left: -25px;
            }
            .hamburger span:nth-child(3) {
              top: 9px;
              transform: rotate(-135deg);
              background: var(--cl-accent-b);
            }
          }
        }

        @media (min-width: ${BREAKPOINT}px) {
          .menu-button {
            display: none;
          }
        }
        @media (max-width: ${BREAKPOINT}px) {
          .menu-button {
            display: block;
          }
          .btn {
            display: none;
          }
        }
      }

      .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 9999;
        pointer-events: all;
        overflow: hidden;
      }
    `,
  ],
})
export class Navbar {
  // Close on Escape
  @HostListener('document:keydown.escape')
  onEsc() {
    this.close();
  }

  // Close when resizing to desktop
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= BREAKPOINT && this.isOpened()) this.close();
  }

  readonly isOpened = signal(false);

  // Optional: lock body scroll when the menu is open
  private readonly _ = effect(() => {
    document.documentElement.style.overflow = this.isOpened() ? 'hidden' : '';
  });

  toggle() {
    this.isOpened.update((v) => !v);
  }
  close() {
    this.isOpened.set(false);
  }
}
