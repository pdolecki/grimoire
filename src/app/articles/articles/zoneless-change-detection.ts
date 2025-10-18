import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Zoneless Change Detection: When & How"
      description="Run Angular without zone.js safely — patterns, pitfalls, and a checklist for migration."
      [tags]="['Angular']"
    >
      <h2>When Zoneless Makes Sense</h2>
      <p>
        Zone.js has long been Angular’s default for tracking async operations,
        but signals and fine-grained reactivity now make it optional. Running
        zoneless can deliver more predictable performance and fewer hidden
        updates — but only if your app is already
        <strong
          >signal-first, event-driven, and free from legacy zone hooks</strong
        >.
      </p>
      <p>
        It makes the most sense for apps where rendering is driven by signals,
        async workflows are explicit, and you can clearly see when and why
        change detection runs.
      </p>

      <h2>Pre-Flight Checklist</h2>
      <ul>
        <li>
          Templates are driven by <strong>signals</strong>, not async pipes or
          implicit zone triggers.
        </li>
        <li>
          Third-party libraries have been audited — many still depend on zone
          microtasks.
        </li>
        <li>
          Manual calls to ChangeDetectorRef are replaced with signal or state
          updates.
        </li>
        <li>
          Test setup avoids zone-based utilities such as <em>fakeAsync</em>.
        </li>
      </ul>

      <h2>Patterns That Work</h2>
      <ul>
        <li>
          Use <strong>signals</strong> for UI state and
          <strong>RxJS</strong> for async data — keep those responsibilities
          separate.
        </li>
        <li>
          Wrap third-party callbacks into signals or effects so Angular can
          react directly to state changes.
        </li>
        <li>
          Prefer Angular CDK primitives for dialogs and overlays — they’re
          already signal-friendly.
        </li>
      </ul>

      <h2>Common Pitfalls</h2>
      <ul>
        <li>
          Some legacy libraries break silently — especially modals, schedulers,
          or animation tools that rely on zone microtasks.
        </li>
        <li>
          Removing Zone.js too early causes subtle bugs if your state isn’t yet
          signal-driven.
        </li>
        <li>
          Without zones, async debugging requires discipline — automatic task
          tracing is gone unless you add custom tooling.
        </li>
      </ul>

      <h2>The Bigger Picture</h2>
      <p>
        Zoneless mode isn’t just about speed; it’s about predictability and
        control. It aligns Angular with modern reactive systems and eliminates a
        major layer of hidden magic. Angular 20 and beyond are built around
        signals — zoneless change detection is the next logical step.
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> Go zoneless only when your app is
        <strong>signal-clean</strong>, your dependencies are audited, and your
        team understands explicit state management. Once ready, you’ll gain a
        simpler, faster, and more deterministic Angular runtime.
      </p>
    </app-article>
  `,
})
export class PostZoneless {}
