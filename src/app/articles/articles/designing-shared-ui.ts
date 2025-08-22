// app/features/articles/posts/designing-shared-ui.ts
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Designing a Shared UI Library that Ages Well"
      description="Naming, boundaries, and tiny components that scale."
      [tags]="['Architecture', 'Design']"
      cover="/articles/1.png"
    >
      <h2>Start tiny</h2>
      <p>
        Prefer single-purpose components with stable inputs/outputs. Co-locate
        stories, tests, and fixtures...
      </p>

      <h2>Boundaries and ownership</h2>
      <p>
        Keep theme tokens and primitives in <em>shared</em>, but
        feature-specific composites in each feature...
      </p>

      <h2>API stability</h2>
      <ul>
        <li>Document inputs/outputs and guarantee backward compatibility.</li>
        <li>
          Use semantic versioning for your shared library folder, even inside
          the same repo.
        </li>
      </ul>

      <hr />
      <p>
        <strong>Takeaway:</strong> consistency beats cleverness. Stable APIs +
        small components = longevity.
      </p>
    </app-article>
  `,
})
export class PostDesigningSharedUi {}
