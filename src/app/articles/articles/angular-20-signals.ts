import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Angular 20: Pragmatic Signals Everywhere"
      description="A practical guide to adopting Angular Signals step by step — no rewrites, just progress."
      [tags]="['Angular']"
    >
      <h2>What Are Signals?</h2>
      <p>
        Signals are a new reactive primitive introduced in Angular 16 for
        managing state and reactivity in a predictable, fine-grained way. They
        form part of Angular’s ongoing move toward zoneless change detection,
        offering better performance and simpler mental models compared to the
        traditional Zone.js approach.
      </p>

      <h2>Signals in Practice</h2>
      <p>
        A signal is simply a value container that tracks its dependencies and
        notifies consumers when its value changes. Signals integrate directly
        with templates, inputs, and computed properties — making them ideal for
        managing local UI state without boilerplate.
      </p>

      <h2>Why Use Signals?</h2>
      <ul>
        <li>
          <strong>Performance:</strong> updates only the parts of the DOM that
          depend on a signal, enabling zoneless change detection.
        </li>
        <li>
          <strong>Fine-grained reactivity:</strong> components re-render
          selectively instead of globally.
        </li>
        <li>
          <strong>Simpler mental model:</strong> especially when combined with
          computed and effect.
        </li>
      </ul>

      <h2>How to Start Adopting Signals</h2>
      <ul>
        <li>
          Convert heavy async template bindings to signals at the edges of your
          app.
        </li>
        <li>
          Use the new input() and output() APIs that support signals directly.
        </li>
        <li>
          Replace imperative subscriptions with computed and effect when
          possible.
        </li>
        <li>
          Keep Observables for async I/O, and expose Signals to templates.
        </li>
      </ul>

      <h2>Pitfalls to Avoid</h2>
      <ul>
        <li>
          Don’t migrate everything at once — adopt signals where they improve
          clarity or performance.
        </li>
        <li>
          Avoid putting business logic directly inside signals; keep them
          focused on state.
        </li>
        <li>Watch out for circular updates when using effect.</li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        Angular’s future is signal-first and zoneless. Signals are already being
        integrated across forms, inputs, and the component model, and their role
        will continue to grow in future versions.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Adopt signals gradually — start at the edges,
        move into view models, and finally into stores. Keep Observables for
        data streams, use Signals for UI state, and you’ll end up with a
        simpler, faster, and future-proof Angular application.
      </p>
    </app-article>
  `,
})
export class PostAngular20Signals {}
