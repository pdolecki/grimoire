import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Background } from './shell/background/background';
import { Navbar } from './shell/navbar/navbar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Background, Navbar],
  template: `
    <app-navbar></app-navbar>
    <app-background></app-background>
    <main class="page">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      .page {
        margin: var(--nav-heigh) auto;
        padding: var(--sz-120) var(--sz-30);
      }
    `,
  ],
})
export class App {}
