import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Angular 20: Pragmatic Signals Everywhere"
      description="A field guide to adopting signals in real code without rewriting the world."
      [tags]="['Angular']"
      cover="/articles/angular-20-signals.png"
    >
      <h2>Why signals?</h2>
      <p>
        Signals give you explicit, predictable reactivity with excellent
        performance characteristics...
      </p>

      <h2>Where to start</h2>
      <ul>
        <li>
          Convert heavy template <em>async</em> bindings to signals at the
          edges.
        </li>
        <li>
          Replace imperative subscriptions with <strong>computed</strong> and
          <strong>effect</strong> where appropriate.
        </li>
        <li>Keep Observables for IO; expose signals to templates.</li>
      </ul>

      <h2>Anti-patterns to avoid</h2>
      <p>
        Don’t mirror your entire NgRx store into signals. Derive only what the
        UI needs...
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> adopt signals incrementally—edges first, then
        view models, then stores.
      </p>
    </app-article> 
  `,
})
export class PostAngular20Signals {}
