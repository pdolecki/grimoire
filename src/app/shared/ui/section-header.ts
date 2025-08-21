import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section-header">
      <h2 class="section-header__title">{{ title() }}</h2>

      <p class="section-header__description">
        {{ description() }}
      </p>
    </header>
  `,
  styles: [
    `
      .section-header {
        text-align: center;
        margin: 0 0 var(--sz-80);
        &__title {
          text-transform: uppercase;
          margin: 0 0 var(--sz-18);
          font-size: var(--sz-50);
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--cl-primary);
          text-shadow: 0 0 20px var(--cl-primary-06);
          position: relative;
          &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: var(--sz-120);
            height: 3px;
            background: linear-gradient(
              90deg,
              var(--cl-primary),
              var(--cl-accent-a)
            );
            box-shadow: 0 0 20px var(--cl-primary);
          }
        }
        &__description {
          font-size: var(--sz-20);
          color: var(--cl-light-06);
          max-width: 800px;
          margin: 0.5rem auto 0;
        }
      }
    `,
  ],
})
export class SectionHeader {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
