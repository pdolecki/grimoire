import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Zoneless Change Detection: When & How"
      description="Run Angular without zone.js, safely. Pitfalls, patterns, and checklists."
      [tag]="'Angular'"
      cover="/articles/zoneless-change-detection.png"
    >
      <h2>When Zoneless Makes Sense</h2>
      <p>
        Zone.js has been Angular’s default for years, but signals and
        fine-grained reactivity make it optional. Going zoneless can deliver
        more predictable performance and fewer surprises, but only if your app
        is truly
        <strong
          >signal-first, event-driven, and free from legacy zone hooks</strong
        >.
      </p>
      <p>
        Zoneless makes the most sense for apps where rendering is already
        signal-driven and async workflows are explicit — no more hidden change
        detection cycles.
      </p>

      <h2>Pre-Flight Checklist</h2>
      <ul>
        <li>
          Templates are driven by <strong>signals</strong>, not async pipes or
          implicit zone triggers.
        </li>
        <li>
          Third-party libraries are audited — many still rely on zone
          microtasks.
        </li>
        <li>
          Manual calls to <code>ChangeDetectorRef.detectChanges()</code> are
          replaced with signal or state updates.
        </li>
        <li>
          Testing setup is updated — no zone-based
          <code>fakeAsync</code> helpers.
        </li>
      </ul>

      <h2>Patterns That Work</h2>
      <ul>
        <li>
          Use <strong>signals</strong> for UI state and
          <strong>RxJS</strong> for async streams — a clear separation of
          concerns.
        </li>
        <li>
          Wrap third-party callbacks into signals or effects so Angular sees
          state updates directly.
        </li>
        <li>
          Prefer Angular CDK primitives for dialogs and overlays — they’re
          already signal-ready.
        </li>
      </ul>

      <h2>Common Pitfalls</h2>
      <ul>
        <li>
          Legacy libraries may break silently — e.g., modals or schedulers that
          rely on zone microtasks.
        </li>
        <li>
          Over-eager migration: removing Zone.js before your state is
          signal-clean leads to subtle bugs.
        </li>
        <li>
          Debugging async without zones requires discipline — you lose automatic
          task tracing unless you add tooling.
        </li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        Zoneless isn’t just about shaving milliseconds — it’s about making
        Angular apps more predictable, easier to reason about, and aligned with
        modern reactive systems. Angular 20+ treats signals as the future, and
        zoneless is the natural complement.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Go zoneless only after your UI is
        <strong>signal-clean</strong>, your third-party dependencies are
        audited, and your team is ready for explicit state management. Do that,
        and you’ll unlock the cleanest, most deterministic Angular change
        detection yet.
      </p>
    </app-article>
  `,
})
export class PostZoneless {}
