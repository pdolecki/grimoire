import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Designing a Shared UI Library that Ages Well"
      description="Naming, boundaries, and tiny components that scale."
      [tags]="['General', 'Angular']"
      cover="/articles/designing-shared-ui.png"
    >
      <h2>Start Small and Purposeful</h2>
      <p>
        Shared UI libraries tend to fail when they try to do too much too early.
        Instead, build <strong>small, single-purpose components</strong> with
        stable inputs and outputs. A button should be just a button — not a
        theme manager, router hook, and form validator all in one.
      </p>
      <p>
        Co-locate stories, tests, and fixtures next to each component to ensure
        reliability and maintainability. Each piece should stand on its own and
        be easy to reason about.
      </p>

      <h2>Boundaries and Ownership</h2>
      <p>
        Clear boundaries make a shared library sustainable. Keep your
        <strong>design tokens, primitives, and base styles</strong> in
        <em>shared</em>, but let
        <strong>feature teams own their composites</strong>. For example, an
        app-wide button lives in shared, but a “Checkout Summary Card” should
        live with the checkout feature.
      </p>
      <p>
        This separation prevents “shared” from becoming a dumping ground for
        one-off widgets and keeps ownership clear.
      </p>

      <h2>API Stability and Evolution</h2>
      <ul>
        <li>
          Document component inputs and outputs so consumers know exactly what’s
          supported.
        </li>
        <li>
          Maintain <strong>backward compatibility</strong> — breaking changes
          ripple across the whole organization.
        </li>
        <li>
          Use <strong>semantic versioning</strong> for the shared library, even
          if it lives inside a monorepo. Treat it like a public API.
        </li>
      </ul>

      <h2>Pitfalls to Avoid</h2>
      <ul>
        <li>
          Don’t let shared become a <em>graveyard of experiments</em>. Every
          component should have a clear use case.
        </li>
        <li>
          Avoid premature abstraction — don’t build a “universal form” component
          until you actually have multiple forms with overlapping needs.
        </li>
        <li>
          Resist over-engineering. Simplicity and clarity age better than clever
          indirection.
        </li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        A well-designed shared library accelerates teams, enforces consistency,
        and reduces rework. But its real power lies in <strong>trust</strong> —
        teams know that shared components won’t break unexpectedly and that the
        APIs are stable. That trust encourages adoption and prevents silos from
        forming.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Build small, keep boundaries clear, and treat
        your shared UI library like a product with versioned APIs. Consistency
        and stability beat clever abstractions every time.
      </p>
    </app-article>
  `,
})
export class PostDesigningSharedUi {}
