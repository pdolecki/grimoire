import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-learn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <article class="card">
      <h3 class="q">{{ card.question }}</h3>
      <pre class="a">{{ card.answer }}</pre>
      <button class="btn primary">Reveal</button>
    </article> -->
  `,
  styles: [``],
})
export default class Learn {}
