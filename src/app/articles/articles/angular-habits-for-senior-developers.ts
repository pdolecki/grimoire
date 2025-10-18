import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Angular Habits for Senior Developers"
      description="Practical habits that keep Angular apps fast, predictable, and easy to maintain."
      [tags]="['Angular']"
    >
      <h2>1. Control Renders</h2>
      <p>
        Excessive re-renders make UIs feel sluggish. Imagine a list of a
        thousand items where updating one triggers the whole list to re-render —
        wasted work.
      </p>
      <h3>Bad example:</h3>
      <ul>
        <li>Mutable inputs for every item</li>
        <li>For loop without a trackBy function</li>
      </ul>
      <h3>Good example:</h3>
      <ul>
        <li>Readonly inputs for child components</li>
        <li>Stable trackBy function for identity updates</li>
      </ul>
      <p>
        The result: a full re-render might take 200&nbsp;ms, while a targeted
        update only around 15&nbsp;ms — smoother and more responsive.
      </p>

      <h2>2. Handle Observables Properly</h2>
      <p>
        Observables are powerful, but misuse leads to leaks and tangled
        lifecycles. The goal is to compose streams, not manage subscriptions
        manually.
      </p>
      <h3>Bad example:</h3>
      <ul>
        <li>Manual subscriptions inside lifecycle hooks</li>
        <li>Local state mutations within subscriptions</li>
      </ul>
      <h3>Good example:</h3>
      <ul>
        <li>Return observables from services</li>
        <li>Assign them once and bind with the async pipe</li>
        <li>Flatten streams using switchMap or mergeMap</li>
      </ul>
      <p>
        This approach eliminates manual teardown logic, reduces leaks, and
        results in cleaner, more predictable components.
      </p>

      <h2>3. Lazy Load and Preload Smartly</h2>
      <p>
        Large bundles slow down first load and delay interaction. Load only
        what’s needed, then preload routes users are likely to visit next.
      </p>
      <h3>Approach:</h3>
      <ul>
        <li>Split heavy features into lazy-loaded routes</li>
        <li>Apply selective preloading for high-priority paths</li>
      </ul>
      <p>
        Example: a 1.5&nbsp;MB bundle reduced to 400&nbsp;KB cut time to
        interactive from 2&nbsp;s to around 0.6&nbsp;s — faster, lighter, and
        smoother.
      </p>

      <h2>4. Move Logic Out of Templates</h2>
      <p>
        Functions inside templates run on every change detection cycle. This
        creates unnecessary CPU work and unstable performance.
      </p>
      <h3>Better approach:</h3>
      <ul>
        <li>Use pure pipes instead of inline functions</li>
        <li>Precompute values before rendering</li>
      </ul>
      <p>
        The outcome is consistent render time and fewer unpredictable
        re-computations.
      </p>

      <h2>5. Use Virtual Scrolling</h2>
      <p>
        Rendering thousands of DOM nodes destroys performance. Render only
        what’s visible.
      </p>
      <h3>Approach:</h3>
      <ul>
        <li>Use CDK Virtual Scroll or a custom lightweight solution</li>
        <li>Keep visible DOM small and reuse elements during scroll</li>
      </ul>
      <p>
        For 10,000 rows, nodes drop to about 30, render time from 500&nbsp;ms to
        20&nbsp;ms, and scrolling stays smooth at 60&nbsp;fps.
      </p>

      <h2>6. Use Strict Types and Small Services</h2>
      <p>
        Weak typing causes runtime bugs and fragile refactors. Strict types and
        focused services catch problems earlier.
      </p>
      <h3>Approach:</h3>
      <ul>
        <li>Enable TypeScript strict mode</li>
        <li>Keep interfaces small and specific</li>
        <li>Ensure each service has a single clear responsibility</li>
      </ul>
      <p>
        This makes refactors safer, codebases cleaner, and debugging faster.
      </p>

      <h2>7. Test the Contracts</h2>
      <p>
        Without reliable tests, regressions slip into production. Small, focused
        tests maintain long-term confidence.
      </p>
      <h3>Approach:</h3>
      <ul>
        <li>Unit test logic-heavy services</li>
        <li>Use component harnesses for UI behavior</li>
        <li>Run tests in CI before every merge</li>
      </ul>
      <p>
        Raising coverage from 45% to 75% can cut regressions by around 30% and
        reduce hotfixes in production.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Senior Angular work is about control, not
        complexity. Keep renders targeted, state explicit, and contracts tested.
        Clean patterns compound into reliable, fast, and maintainable apps.
      </p>
    </app-article>
  `,
})
export class AngularHabitsForSeniorDevelopers {}
