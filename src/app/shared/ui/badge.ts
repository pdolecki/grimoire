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
        border: 2px solid var(--cl-accent-b-02);
        border-radius: var(--sz-20);
      }
    `,
  ],
})
export class Badge {
  readonly label = input.required<string>();
}
