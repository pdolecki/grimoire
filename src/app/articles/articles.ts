import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Prose } from './ui/prose';

@Component({
  selector: 'app-articles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Prose],
  template: `
    <app-prose>
      <h1>My Article</h1>
      <p>Intro text…</p>
      <pre><code>const x = 1;</code></pre>
    </app-prose>
  `,
  styles: [``],
})
export default class Articles {}
