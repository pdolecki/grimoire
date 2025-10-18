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
    >
      <h2>What are Signals?</h2>
      <p>
        Signals are a new reactive primitive introduced in Angular 16 to manage
        state and reactivity in a predictable way. They’re part of Angular’s
        shift toward a fine-grained reactive model that improves performance and
        developer experience compared to the traditional Zone.js-based change
        detection.
      </p>

      <h2>Signals in Practice</h2>
      <p>
        A signal is simply a value container that tracks dependencies and
        notifies consumers when the value changes. They integrate directly with
        Angular templates and inputs, and are ideal for local UI state.
      </p>

      <h2>Why Use Signals?</h2>
      <ul>
        <li>
          <strong>Performance:</strong> enables <em>zoneless</em> change
          detection by updating only the parts of the DOM that depend on a
          signal.
        </li>
        <li>
          <strong>Fine-grained reactivity:</strong> components re-render
          selectively, not globally.
        </li>
        <li>
          <strong>Simpler mental model:</strong> especially when paired with
          <code>computed</code> and <code>effect</code>.
        </li>
      </ul>

      <h2>How to Start Adopting Signals</h2>
      <ul>
        <li>
          Convert heavy <code>async</code> template bindings to signals at the
          edges.
        </li>
        <li>
          Use the new <code>input()</code> / <code>output()</code> APIs with
          signals.
        </li>
        <li>
          Replace imperative subscriptions with <code>computed</code> /
          <code>effect</code> where appropriate.
        </li>
        <li>
          Keep <strong>Observables</strong> for async IO, and expose
          <strong>Signals</strong> to templates.
        </li>
      </ul>

      <h2>Pitfalls to Avoid</h2>
      <ul>
        <li>
          Don’t migrate everything blindly—use signals where they improve
          clarity or performance.
        </li>
        <li>
          Avoid putting business logic directly inside signals; keep them
          focused on UI state.
        </li>
        <li>
          Watch out for circular dependencies when using <code>effect</code>.
        </li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        Angular’s long-term vision is clear: a zoneless, signal-first framework
        where templates update predictably and efficiently. Signals are already
        integrated into forms, inputs, and the component model, and they’ll only
        grow in importance.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Adopt signals incrementally—edges first, then
        view models, then stores. Don’t try to replace RxJS everywhere. Combine
        Observables for async streams with Signals for UI state, and you’ll get
        a clean, high-performance Angular app that’s future-proof.
      </p>
    </app-article>
  `,
})
export class PostAngular20Signals {}
