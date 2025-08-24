import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Zoneless Change Detection: When & How"
      description="Run Angular without zone.js, safely. Pitfalls, patterns, and checklists."
      [tags]="['Angular']"
      cover="/articles/zoneless-change-detection.png"
    >
      <h2>When zoneless makes sense</h2>
      <p>
        If your app is signal-first, event-driven, and avoids legacy zone hooks,
        you can gain determinism and perf...
      </p>

      <h2>Pre-flight checklist</h2>
      <ul>
        <li>Templates driven by signals (no hidden async pipe churn).</li>
        <li>3rd-party libs audited for zone coupling.</li>
        <li>Manual change triggers replaced with state updates.</li>
      </ul>

      <h2>Common pitfalls</h2>
      <p>
        Dialogs and overlays may rely on zone microtasks. Prefer CDK or ensure
        they emit proper state...
      </p>

      <hr />
      <p>
        <strong>Takeaway:</strong> go zoneless only after your UI is
        signal-clean and third-party deps are verified.
      </p>
    </app-article>
  `,
})
export class PostZoneless {}
