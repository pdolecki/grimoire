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
    <main>
      <router-outlet />
    </main>
  `,
  styles: [],
})
export class App {}
