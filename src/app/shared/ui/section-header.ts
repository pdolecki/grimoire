import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type Align = 'start' | 'center' | 'end';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <header
      class="section-header"
      [class.-center]="align() === 'center'"
      [class.-start]="align() === 'start'"
      [class.-end]="align() === 'end'"
      [attr.aria-describedby]="subtitle() ? descId : null"
    >
      @switch (level()) { @case (1) {
      <h1 class="title" [id]="titleId">{{ title() }}</h1>
      } @case (2) {
      <h2 class="title" [id]="titleId">{{ title() }}</h2>
      } @case (3) {
      <h3 class="title" [id]="titleId">{{ title() }}</h3>
      } @case (4) {
      <h4 class="title" [id]="titleId">{{ title() }}</h4>
      } @case (5) {
      <h5 class="title" [id]="titleId">{{ title() }}</h5>
      } @default {
      <h6 class="title" [id]="titleId">{{ title() }}</h6>
      } } @if (subtitle()) {
      <p class="subtitle" [id]="descId">
        {{ subtitle() }}
      </p>
      }
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .section-header {
        text-align: center;
        margin-bottom: var(--sz-80);
      }
      .section-header.-start {
        text-align: left;
      }
      .section-header.-end {
        text-align: right;
      }

      .title {
        text-transform: uppercase;
        margin-bottom: var(--sz-18);
        font-size: var(--sz-50);
        font-weight: 800;
        letter-spacing: 2px;
        color: var(--cl-primary);
        text-shadow: 0 0 20px var(--cl-primary-06);
        position: relative;
      }
      .title::after {
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

      .section-header.-start .title::after {
        left: 0;
        transform: none;
      }
      .section-header.-end .title::after {
        left: auto;
        right: 0;
        transform: none;
      }

      .subtitle {
        font-size: var(--sz-20);
        color: var(--cl-light-06);
        max-width: 800px;
        margin: 0.5rem auto 0;
      }
      .section-header.-start .subtitle {
        margin-left: 0;
        margin-right: 0;
      }
      .section-header.-end .subtitle {
        margin-left: auto;
        margin-right: 0;
      }
    `,
  ],
})
export class SectionHeader {
  // Required
  readonly title = input.required<string>();

  // Optional
  readonly subtitle = input<string>('');
  readonly level = input<number>(2); // 1..6
  readonly align = input<Align>('center');

  // a11y ids (SSR-safe, stable per instance)
  protected readonly uid = Math.random().toString(36).slice(2);
  protected readonly titleId = `sh-title-${this.uid}`;
  protected readonly descId = `sh-desc-${this.uid}`;
}
