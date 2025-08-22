import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="badge">
      {{ label() }}
    </span>
  `,
  styles: [
    `
      .badge {
        color: var(--cl-accent-b);
        background: var(--cl-dark-04);
        padding: var(--sz-10) var(--sz-14);
      }
    `,
  ],
})
export class Badge {
  readonly label = input.required<string>();
}
