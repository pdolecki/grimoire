import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Designing a Shared UI Library That Ages Well"
      description="How to design small, stable, and trusted UI components that scale with your team."
      [tags]="['Angular']"
    >
      <h2>Start Small and Purposeful</h2>
      <p>
        Shared UI libraries often fail when they try to do everything at once.
        Start instead with <strong>small, single-purpose components</strong>
        that have clear, stable inputs and outputs. A button should only be a
        button — not a theme switcher, router hook, or form validator in
        disguise.
      </p>
      <p>
        Keep each component self-contained. Store its stories, tests, and
        fixtures alongside the implementation so maintenance and discovery stay
        simple.
      </p>

      <h2>Boundaries and Ownership</h2>
      <p>
        Clear boundaries keep your library sustainable. Keep
        <strong>design tokens, primitives, and base styles</strong> in
        <em>shared</em>, but let
        <strong>feature teams own their composites</strong>. For example, an
        app-wide button belongs in shared, while a “Checkout Summary Card”
        should live within the checkout feature.
      </p>
      <p>
        This separation prevents “shared” from turning into a dumping ground for
        experimental widgets and keeps ownership and accountability clear.
      </p>

      <h2>API Stability and Evolution</h2>
      <ul>
        <li>
          Document inputs and outputs so consumers know exactly what’s
          supported.
        </li>
        <li>
          Maintain <strong>backward compatibility</strong> — breaking changes
          ripple through every dependent project.
        </li>
        <li>
          Use <strong>semantic versioning</strong> even inside a monorepo. Treat
          the shared library as a public API that others rely on.
        </li>
      </ul>

      <h2>Pitfalls to Avoid</h2>
      <ul>
        <li>
          Don’t let shared become a <em>graveyard of experiments</em>. Every
          component should have a clear, documented purpose.
        </li>
        <li>
          Avoid premature abstraction — wait until you see repeated patterns
          before generalizing.
        </li>
        <li>
          Resist over-engineering. Simple, explicit code ages better than clever
          indirection.
        </li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        A well-designed shared library speeds up development, enforces
        consistency, and reduces duplication. But its greatest value lies in
        <strong>trust</strong> — teams rely on it knowing that components are
        stable, documented, and won’t break unexpectedly. That trust drives
        adoption and collaboration across the organization.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Build small, define clear boundaries, and
        treat your shared UI library as a product with versioned, stable APIs.
        Consistency and clarity outlast clever abstractions every time.
      </p>
    </app-article>
  `,
})
export class PostDesigningSharedUi {}
